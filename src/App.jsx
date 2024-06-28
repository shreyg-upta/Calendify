import {BrowserRouter, Routes, Route} from 'react-router-dom';

//routes
import HomePage from './Pages/Dashboard.jsx';
import Upload from './Pages/Upload.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload" element={<Upload />} />

            </Routes>
        </BrowserRouter>
    );
}