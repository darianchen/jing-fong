import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SplashPage from './Components/SplashPage';
import Menu from './Components/Menu';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;