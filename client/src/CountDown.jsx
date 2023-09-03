import { useEffect, useState, useRef } from "react";
import "./Countdown.css";

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
    <div className="center-container">
      <h2>Say A Countdown: {countdown}</h2>
      <button onClick={toggleTimer}>
        {isRunning ? "Pause" : countdown === 0 ? "Restart" : "Start"}
      </button>
      <svg width="220" height="220">
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#6200EA", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#B3AFFF", stopOpacity: 1 }}
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
          stroke="url(#purpleGradient)"
          strokeWidth="10"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  );
}
