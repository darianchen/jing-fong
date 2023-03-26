import Slider from "../Slider";
import './index.css';
import restaurantImage from "../../assets/Images/restaurant-image.jpeg";

const SplashPage = () => {

    return(
        <div>
            <Slider/>
            <div className="restaurant-info">
                <div className="restaurant-image">
                    <img src={restaurantImage} alt="Restaurant Image"/>
                </div>
                <div className="restaurant-description">
                    <h2>About Jing Fong</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio id orci fringilla fringilla. Nullam dictum elit in mi laoreet, sed bibendum magna iaculis. Duis id risus ac lacus semper fringilla. In suscipit sapien sit amet lobortis convallis. Suspendisse bibendum nulla vitae rutrum posuere.</p>
                </div>
            </div>
            <div className="iframe-container">
                    <iframe title="Jing Fong Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.158221168869!2d-71.77453988449348!3d44.30669771794461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4056bfeabf53e8ed%3A0xf0641a0554961a3b!2sJing%20Fong!5e0!3m2!1sen!2sus!4v1679688364395!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default SplashPage;