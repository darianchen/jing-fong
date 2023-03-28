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
            <a href='/jing-fong/#/'>
            <h3 id="jing-fong">Jing Fong <span>金豐</span></h3>
            </a>
            <nav ref={navRef}>
                <a href="/jing-fong/#/" className='link'>Home</a>
                <a href="/jing-fong/#/menu">Menu</a>
                <a href="/jing-fong/#/gallery">Gallery</a>
                <a href="/jing-fong/#/feedback">Feedback</a>
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