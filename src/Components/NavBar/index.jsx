import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const NavBar = () => {
    const navRef = useRef();

    const toggleNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h3 id="jing-fong">Jing Fong</h3>
            <nav ref={navRef}>
                <a href="#Home" className='link'>Home</a>
                <a href="#menu">Menu</a>
                <a href="#gallery">Gallery</a>
                <a href="#">Coupons</a>
                <a href="#">Feedback</a>
                <button className='nav-btn nav-close-btn' onClick={toggleNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={toggleNavBar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default NavBar;