import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Views/Home/Home';
import UploadDataPage from './Views/UploadDataPage/UploadDataPage';
import EventSelectionPage from './Views/EventSelectionPage/EventSelectionPage';
import NavBar from './Views/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uploadData" element={<UploadDataPage />} />
          <Route path="/eventSelectionPage" element={<EventSelectionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
