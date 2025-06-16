import { useState, useEffect } from "react";
import generalTsosChicken from "../../assets/Images/general-tsos-chicken.jpg";
import beefWithBroccoli from "../../assets/Images/beef-with-broccoli.jpg";
import happyFamily from "../../assets/Images/happy-family.jpg";
import A from "../../assets/Images/A.jpg";
import puPuPlatter from "../../assets/Images/pu-pu-platter.jpg";
import houseSpecialLoMein from '../../assets/Images/house-special-lo-mein.jpg';
import sesameChicken from '../../assets/Images/sesame-chicken.jpg';
import "./index.css";

const dishes = [
  { name: "C 25. General Tso's Chicken", image: generalTsosChicken },
  { name: "C 5.   Beef w. Broccoli", image: beefWithBroccoli },
  { name: "E 1.   Happy Family", image: happyFamily },
  { name: "A.   Chicken Wings, Crab Rangoon, Boneless Ribs & Chicken Fingers", image: A },
  { name: "20.   Pu Pu Platter (for 2)", image: puPuPlatter },
  { name: "C 20.   Sesame Chicken", image: sesameChicken },
  { name: "50.   House Special Lo Mein", image: houseSpecialLoMein },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex =
        currentIndex === dishes.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    const prevIndex =
      currentIndex === 0 ? dishes.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === dishes.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const renderDots = () => {
    return (
      <div className="slider-dots">
        {dishes.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-prev" onClick={handlePrev}>
        {"<"}
      </div>
      <div className="slider-item">
        <img src={dishes[currentIndex].image} className="slider-img" alt={dishes[currentIndex].name} />
        <div className="dish-name">{dishes[currentIndex].name}</div>
      </div>
      <div className="slider-next" onClick={handleNext}>
        {">"}
      </div>
      {renderDots()}
    </div>
  );
};

export default Slider;
