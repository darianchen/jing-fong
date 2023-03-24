import './index.css';

const FooterComponent = () => {

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
                    Telephone: 
                    <a href='tel:6034446688'>(603) 444-6688</a>
                    <br />
                    <a href='tel:6034446288'>(603) 444-6288</a>
                </p>
            </div>
            <div className="footer-section">
                <h3 className="footer-section-header">Hours</h3>
                <p className="footer-section-content">
                    Mon-Thu: 11am - 10pm
                    <br />
                    Fri-Sat: 11am - 11pm
                    <br />
                    Sun: 11am - 10pm
                </p>
            </div>
            <div className="footer-section">
                <h3 className="footer-section-header">Map</h3>
                <div className="map-container">
                    <iframe title="Jing Fong Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.158221168869!2d-71.77453988449348!3d44.30669771794461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4056bfeabf53e8ed%3A0xf0641a0554961a3b!2sJing%20Fong!5e0!3m2!1sen!2sus!4v1679688364395!5m2!1sen!2sus" width="100%" height="200" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;