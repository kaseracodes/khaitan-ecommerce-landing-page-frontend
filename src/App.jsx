import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutUsPage from "./pages/AboutUsPage";
import ApiTestingPage from "./pages/ApiTestingPage";

function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/api-testing" element={<ApiTestingPage />} />
            </Routes>
        </Router>
        </>
    )
}

export default App;
