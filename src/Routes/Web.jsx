import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Welcome from "@/Pages/Welcome";

export default function WebRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
            </Routes>
        </Router>
    )
}