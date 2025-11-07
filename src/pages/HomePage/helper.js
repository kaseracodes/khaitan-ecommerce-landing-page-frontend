import { useEffect, useState } from 'react';
import { productApi } from "../../networking/api/productApi";

export function useHomePageLogic() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('Welcome to Khaitan Store!');
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function init() {
            try {
                setLoading(true);
                setError(null);

                const response = await productApi.list(true); // 👈 pass enableLogging true
                // now response is always like { success, message, data, error, status }

                if (response.success) {
                    setProducts(response.data);
                    setMessage(response.message);
                } else {
                    setError(response.message);
                }
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        init();
    }, []);

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

    return { count, increment, reset, message, time, products, loading, error };
}