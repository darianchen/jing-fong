import React, { useState } from "react";
import Slider from "../Slider";
import Modal from "react-modal";
import './index.css';
import restaurantImage from "../../assets/Images/restaurant-image.jpeg";

const SplashPage = () => {
    const [isOpen, setIsOpen] = useState(true); // modal starts open


    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnOverlayClick={true}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.7)", // dimmed background
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        position: "relative",
                        inset: "auto",
                        backgroundColor: "#000", // black modal
                        color: "#fff",           // white text
                        padding: "40px 30px",
                        borderRadius: "8px",
                        maxWidth: "400px",
                        width: "90%",
                        textAlign: "center",
                        fontFamily: "Arial, sans-serif",
                    },
                }}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "15px",
                        background: "none",
                        border: "none",
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "bold",
                        cursor: "pointer",
                    }}
                    aria-label="Close"
                >
                    ×
                </button>

                {/* Modal Content */}
                <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>
                    Temporary Closure Notice
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                    Our restaurant will be <strong>closed from September 20 – 29</strong>.
                    <br />
                    We look forward to welcoming you back on <strong>September 30</strong>.
                </p>
                <p style={{ marginTop: "20px", fontSize: "14px", opacity: 0.8 }}>
                    Thank you for your understanding and continued support.
                </p>
            </Modal>

            <Slider />
            <div className="restaurant-info">
                <div className="restaurant-image">
                    <img src={restaurantImage} alt="Restaurant Image" />
                </div>
                <div className="restaurant-description">
                    <p>Jing Fong is a family-owned restaurant that has been serving traditional and American-style Chinese cuisine to the beautiful community of Littleton, New Hampshire since 1992. Our restaurant is conveniently located in the heart of the town, allowing for easy access to our cozy and welcoming environment.</p>
                    <p>At Jing Fong, we take pride in every order we receive. Our head chef carefully incorporates the freshest ingredients into each dish we send out. We offer classics like General Tso's Chicken and Beef with Broccoli, and even healthy options such as Steamed Chicken or Beef with Mixed Vegetables.</p>
                    <p>Come and visit Jing Fong today to taste the best Chinese cuisine in Littleton!</p>
                </div>
            </div>
            <div className="map-container">
                <iframe title="Jing Fong Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.158221168869!2d-71.77453988449348!3d44.30669771794461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4056bfeabf53e8ed%3A0xf0641a0554961a3b!2sJing%20Fong!5e0!3m2!1sen!2sus!4v1679688364395!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default SplashPage;