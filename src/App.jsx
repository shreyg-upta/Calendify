import {BrowserRouter, Routes, Route} from 'react-router-dom';

//routes
import HomePage from './Pages/Dashboard.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}