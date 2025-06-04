import './index.css';
import Logo from './logo.jsx';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-section">
                <h3 className="footer-section-header">Location</h3>
                <p className="footer-section-content">
                    60 Main St.
                    <br />
                    Littleton, NH 03561
                    <br />
                    <br />
                    T: <a href='tel:6034446688'>(603) 444-6688</a>
                    <br />
                    T: <a href='tel:6034446288'>(603) 444-6288</a>
                </p>
            </div>
            <div className="footer-section">
                <h3 className="footer-section-header">Hours</h3>
                <p className="footer-section-content">
                    Monday: 4am - 9pm
                    <br />
                    Tue-Thu: 11am - 9pm
                    <br />
                    Fri-Sat: 11am - 10pm
                    <br />
                    Sun: 12pm - 9pm
                </p>
            </div>
            <div className="footer-section" onClick={scrollToTop}>
                <Logo />
            </div>
        </footer>
    );
};

export default Footer;