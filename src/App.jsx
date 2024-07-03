import {BrowserRouter, Routes, Route} from 'react-router-dom';

//routes
import HomePage from './Pages/Dashboard.jsx';
import Upload from './Pages/Upload.jsx';
import DownloadCalendarPage from './Pages/DownloadCalendar/DownloadCalendarPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/calendars/:c" element={<DownloadCalendarPage />} />
            </Routes>
        </BrowserRouter>
    );
}
