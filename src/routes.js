import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App.js'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<App />} />
                <Route path="/cart" element={<App />} />
                <Route path="/checkout" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}