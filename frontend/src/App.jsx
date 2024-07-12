import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContextWrapper from './ContextWrapper.jsx';


//routes
import HomePage from './Pages/Dashboard.jsx';
import Upload from './Pages/Upload.jsx';
import DownloadCalendarPage from './Pages/DownloadCalendar/DownloadCalendarPage';
import AboutUs from './Pages/AboutUs.jsx';



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload" element={<ContextWrapper><Upload /></ContextWrapper>} />
                <Route path="/calendars/:c" element={<DownloadCalendarPage />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
}
