import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SplashPage from './Components/SplashPage';
import Menu from './Components/Menu';
import './App.css';
import Footer from './Components/Footer';
import Feedback from './Components/Feedback';
import Gallery from './Components/Gallery';

function App() {
  return (
    <>
      <NavBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/feedback" element={<Feedback />} />
          <Route path="/gallery" element={<Gallery />} /> */}
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;