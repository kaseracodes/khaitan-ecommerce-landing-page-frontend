import { container, heading, buttonContainer, button1, button2 } from './styles';
import { useHomePageLogic } from './helper';
import useAnimated from './useAnimated';

export default function HomePage() {
    const { count, increment, reset, message, time } = useHomePageLogic();
    const { motion, fadeInUp } = useAnimated();

    return (
        <motion.div style={container} {...fadeInUp}>
        <h1 style={heading}>{message}</h1>
        <p>Current time: {time}</p>
        <h2>Count: {count}</h2>
        <div style={buttonContainer}>
            <button style={button1} onClick={increment}>Increase</button>
            <button style={button2} onClick={reset}>Reset</button>
        </div>
        </motion.div>
  );
}