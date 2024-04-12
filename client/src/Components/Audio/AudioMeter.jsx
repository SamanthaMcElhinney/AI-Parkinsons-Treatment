import React, { useState, useEffect } from "react";

export default function AudioMeter() {
  const [dB, setDb] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false); 

  useEffect(() => {
    if (!isMeasuring) return; 

    let audioContext;
    let analyser;
    let microphone;

    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then((stream) => {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 2048;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const calculateLoudness = () => {
          if (!isMeasuring) return; 
          analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
          }
          let average = sum / bufferLength;
          let db = 20 * Math.log10(average);
          setDb(db);
          requestAnimationFrame(calculateLoudness);
        };

        calculateLoudness();
      })
      .catch((err) => {
        console.error("The following gUM error occurred: " + err);
      });

    return () => {
      setIsMeasuring(false);
      if (audioContext) audioContext.close();
    };
  }, [isMeasuring]); 

  return (
    <div>
      <p>Current dB: {isMeasuring ? dB.toFixed(2) : "N/A"}</p>
      <button onClick={() => setIsMeasuring(!isMeasuring)}>
        {isMeasuring ? "Stop Measuring" : "Start Measuring"}
      </button>
    </div>
  );
}
