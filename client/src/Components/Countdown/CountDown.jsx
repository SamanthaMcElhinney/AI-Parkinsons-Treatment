import { useEffect, useState, useRef } from "react";
import "./CountDown.css";
import styles from "../../styles.module.css"

export default function Countdown() {
  const [countdown, setCountdown] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef();

  const toggleTimer = () => {
    if (countdown === 0) {
      restartTimer();
    } else {
      setIsRunning(!isRunning);
    }
  };

  const restartTimer = () => {
    setCountdown(10);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning && countdown > 0) {
      timerId.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timerId.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerId.current);
    }
    return () => clearInterval(timerId.current);
  }, [isRunning, countdown]);

  const strokeDasharray = 628;
  const strokeDashoffset = `calc(628 * ${countdown / 10})`;

  return (
    <div className={styles.main}>
      <div className="directions">
        <h3>Vocal Exercises like "/a/":</h3>
        <p>
          Vocal exercises aim to strengthen the vocal cords, improve voice
          projection, and enhance articulation. One basic exercise is the
          sustained "/a/" phonation:
        </p>
        <ul>
          <li>
            <strong>Posture:</strong> Sit or stand up straight.
          </li>
          <li>
            <strong>Breath:</strong> Take a deep breath in.
          </li>
          <li>
            <strong>Phonation:</strong> As you exhale, make a long, steady "/a/"
            sound.
          </li>
          <li>
            <strong>Duration:</strong> Try to hold the sound as steady as
            possible for as long as you can.
          </li>
          <li>
            <strong>Volume:</strong> Aim for a moderate volume, not too soft but
            not shouting.
          </li>
        </ul>
        <p>
          <strong>Goal:</strong> To increase the duration you can hold the
          sound, improve the steadiness of the sound, and increase volume over
          time. This exercise helps to improve vocal cord closure and can
          enhance voice quality.
        </p>
      </div>
      <h2>Say Ah Countdown: {countdown}</h2>
      <button onClick={toggleTimer}>
        {isRunning ? "Pause" : countdown === 0 ? "Restart" : "Start"}
      </button>
      <svg width="220" height="220">
        <defs>
          <linearGradient
            id="complementaryGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#e53935", stopOpacity: 1 }} // Magenta
            />
            <stop
              offset="100%"
              style={{ stopColor: "#8e24aa", stopOpacity: 1 }} // Purple
            />
          </linearGradient>
        </defs>
        <circle
          cx="110"
          cy="110"
          r="100"
          stroke="#ccc"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="110"
          cy="110"
          r="100"
          stroke="url(#complementaryGradient)"
          strokeWidth="10"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  );
}
