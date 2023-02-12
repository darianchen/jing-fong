import './index.css';

const FooterComponent = () => {

    return(
        <footer className="footer">
        <div className="footer-section">
            <h3 className="footer-section-header">Location</h3>
            <p className="footer-section-content">
                60 Main St.
                <br />
                Littleton, NH 03561
                <br />
                <br />
                Telephone: (603) 444-6688
            </p>
        </div>
        <div className="footer-section">
            <h3 className="footer-section-header">Hours</h3>
            <p className="footer-section-content">
                Mon-Thu: 11am - 10
                <br />
                Fri-Sat: 11am - 11pm
                <br />
                Sun: 11am - 10pm
            </p>
        </div>
    </footer>
    )
}

export default FooterComponent;