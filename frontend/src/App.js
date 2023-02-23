import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import UploadDataPage from './Views/UploadDataPage/UploadDataPage';
import EventSelectionPage from './Views/EventSelectionPage/EventSelectionPage';
import NavBar from './Views/NavBar/NavBar';
import EventPage from './Views/EventPage/EventPage';
import ApplicationEvaluationPage from './Views/ApplicationEvaluationPage/ApplicationEvaluationPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uploadData" element={<UploadDataPage />} />
          <Route path="/eventSelectionPage" element={<EventSelectionPage />} />
          <Route path="/events/:eventId" element={<EventPage />} />
          <Route path="/events/:eventId/:applicationId" element={<ApplicationEvaluationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
