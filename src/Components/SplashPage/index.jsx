import NavBar from "../NavBar";
import FooterComponent from "../Footer";
import Slider from "../Slider";
import './index.css';
import restaurantImage from "../../assets/Images/restaurant-image.jpeg";

const SplashPage = () => {

    return(
        <div>
            <NavBar/>
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

            <FooterComponent/>
        </div>
    );
};

export default SplashPage;