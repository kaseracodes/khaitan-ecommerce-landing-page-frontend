import { container, heading, buttonContainer, button1, button2 } from './styles';
import { useHomePageLogic } from './helper';
import useAnimated from './useAnimated';

export default function HomePage() {
    const { count, increment, reset, message, time, products, loading, error } = useHomePageLogic();
    const { motion, fadeInUp } = useAnimated();

    // console.log(products);

    return (
        <motion.div style={container} {...fadeInUp}>
        <h1 style={heading}>{message}</h1>

        <p>Current time: {time}</p>
        <h2>Count: {count}</h2>

        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading && !error && (
            <>
            <p>Total Products: {products?.length || 0}</p>
            <ul>
                {products?.slice(0, 3)?.map((p, idx) => (
                    <li key={idx}>{p?.title || "Unnamed product"}</li>
                ))}
            </ul>
            </>
        )}

        <div style={buttonContainer}>
            <button style={button1} onClick={increment}>Increase</button>
            <button style={button2} onClick={reset}>Reset</button>
        </div>
        </motion.div>
  );
}