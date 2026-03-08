import { useState, useEffect } from 'react';

export default function QuestionTimer({timeout, onTimeout} ) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('Setting timeout for');
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);
    

    useEffect(() => {
        console.log('Updating remaining time');
        setInterval(() => {
            
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    }, []);
    
    return <progress id="question-timer" max={timeout} value={remainingTime} ></progress>;
};