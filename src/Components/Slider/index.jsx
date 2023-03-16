import { useState } from "react";

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return(
        <div>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        </div>
    )

}

export default Slider;