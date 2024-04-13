import { useEffect, useState, useRef } from "react";
import "./CountDown.css";
import styles from "../../styles.module.css";

export default function Countdown() {
  const INITIAL_COUNTDOWN = 10;
  const INTERVAL_DURATION = 1000; 

  const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(null);

  const toggleTimer = () => {
    if (countdown === 0) {
      restartTimer();
    } else {
      setIsRunning(!isRunning);
    }
  };

  const restartTimer = () => {
    setCountdown(INITIAL_COUNTDOWN);
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning && countdown > 0) {
      timerId.current = setInterval(() => {
        setCountdown((prev) => {
          const nextCount = prev - 1;
          if (nextCount < 1) {
            clearInterval(timerId.current);
            setIsRunning(false);
            return 0;
          }
          return nextCount;
        });
      }, INTERVAL_DURATION);
    } else {
      clearInterval(timerId.current);
    }
    return () => clearInterval(timerId.current);
  }, [isRunning, countdown]);

  const strokeDasharray = 628;
  const strokeDashoffset = `calc(628 * ${countdown / INITIAL_COUNTDOWN})`;

  return (
    <main className="vocal-container">
      <section className="exercise-title-container">
        <h1 className="exercise-title">
          Help your<span className="italic-color">future</span> self now!
        </h1>
      </section>
      <section className="vocal-container-center">
        <section className="vocal-container-left">
          <div className="exercise-content">
            <p className="exercise-content-top">
              Vocal exercises strengthen the vocal cords, improve voice
              projection, and enhance articulation. </p>
            <p className="vocal-title">Sustained Phonation or<span className="vocal-a"> Ah</span>
            </p>
            <ul>
              <li>
                <strong>Posture:</strong> Sit or stand up straight.
              </li>
              <li>
                <strong>Breath:</strong> Take a deep breath in.
              </li>
              <li>
                <strong>Phonation:</strong> As you exhale, make a long, steady
                "/a/" sound.
              </li>
              <li>
                <strong>Duration:</strong> Try to hold the sound as steady as
                possible for as long as you can.
              </li>
              <li>
                <strong>Volume:</strong> Aim for a moderate volume, not too soft
                but not shouting.
              </li>
            </ul>
            <p>
              <strong>Goal:</strong> To increase the duration you can hold the
              sound, improve the steadiness of the sound, and increase volume
              over time. This exercise helps to improve vocal cord closure and
              can enhance voice quality.
            </p>
          </div>
        </section>
        <div className="vocal-container-right">
          <h2 className="">Countdown: {countdown}</h2>
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
                  style={{ stopColor: "#cd82c0", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#8e24aa", stopOpacity: 1 }}
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
          <button onClick={toggleTimer} className={styles.countdownButton}>
            {isRunning ? "Pause" : countdown === 0 ? "Restart" : "Start"}
          </button>
        </div>
      </section>
    </main>
  );
}
