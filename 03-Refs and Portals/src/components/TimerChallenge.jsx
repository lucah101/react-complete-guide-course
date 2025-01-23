import { useRef, useState } from "react";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimeExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimeExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 'S' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}> 
                {timerStarted ? 'Time is running..' : 'Timer inactive'}
            </p>
        </section>
    );
}

