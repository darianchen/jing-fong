import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SplashPage from './Components/SplashPage';
import Menu from './Components/Menu';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <NavBar />
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </HashRouter>
    <Footer />
  </>
  );
}

export default App;