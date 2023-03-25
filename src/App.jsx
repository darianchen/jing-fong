import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SplashPage from './Components/SplashPage';
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;