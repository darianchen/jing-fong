import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const NavBar = () => {
    const navRef = useRef();

    const toggleNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return(
        <header id='main-header'>
            <a href='/'>
            <h3 id="jing-fong">Jing Fong <span>金豐</span></h3>
            </a>
            <nav ref={navRef}>
                <a href="/" className='link'>Home</a>
                <a href="/menu">Menu</a>
                <a href="/gallery">Gallery</a>
                <a href="/feedback">Feedback</a>
                <button className='nav-btn nav-close-btn' onClick={toggleNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={toggleNavBar}>
                <FaBars/>
            </button>
        </header>
    );
};

export default NavBar;