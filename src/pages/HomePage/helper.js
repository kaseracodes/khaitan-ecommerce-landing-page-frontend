import { useEffect, useState } from 'react';

export function useHomePageLogic() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('Welcome to Khaitan Store!');
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // update time every second
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(interval);
    }, []);

    const increment = () => setCount((c) => c + 1);
    const reset = () => setCount(0);

    // pretend async data load
    useEffect(() => {
        const timer = setTimeout(() => setMessage('Enjoy exclusive deals today ✨'), 3000);
        return () => clearTimeout(timer);
    }, []);

    return { count, increment, reset, message, time };
}