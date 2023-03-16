import NavBar from "../NavBar";
import FooterComponent from "../Footer";
import Slider from "../Slider";

const SplashPage = () => {
    const slides = [];

    return(
        <div>
            <NavBar/>
            <Slider slides={slides}/>
            <FooterComponent/>
        </div>
    )
}

export default SplashPage;