import { useState, useEffect } from "react";
import sesameChicken from "../../assets/Images/sesame-chicken.png";
import porkFriedRice from "../../assets/Images/pork-fried-rice.jpeg";
import chickenWings from "../../assets/Images/chicken-wings.jpeg";
import frenchFries from '../../assets/Images/french-fries.jpeg';
import "./index.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [sesameChicken, porkFriedRice, chickenWings, frenchFries];

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex =
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    const prevIndex =
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider-prev" onClick={handlePrev}>
        {"<"}
      </div>
      <img src={slides[currentIndex]} className="slider-img" />
      <div className="slider-next" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );  
};

export default Slider;