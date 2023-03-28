import './index.css';

const Gallery = () => {
  const dishes = [
    { name: 'Dish 1', image: 'https://www.metro.ca/userfiles/image/chinese-new-year/chinesedishes-300x300.jpg' },
    { name: 'Dish 2', image: 'https://ezshoppers.co/indigobarrestaurantandsuites/wp-content/uploads/sites/92/2020/10/indo-chinese-food-300x300.jpg' },
    { name: 'Dish 3', image: 'https://destinationbedfordva.com/wp-content/uploads/2019/06/Peking-Chinese-300x300.jpg' },
    { name: 'Dish 4', image: 'https://farahjeats.com/wp-content/uploads/2022/01/Crab-Rangoons-300x300.jpg' },
    { name: 'Dish 5', image: 'http://recipes-for-all.com/wp-content/uploads/2021/08/soy-sauce-chicken-3-1367x2048-1-e1629279184980-300x300.jpg' },
    { name: 'Dish 6', image: 'https://khinskitchen.com/wp-content/uploads/2022/12/mapo-tofu-05-300x300.jpg' },
    { name: 'Dish 7', image: 'https://100krecipes.com/wp-content/uploads/2021/01/Classic-Coney-Island-Hot-Dog-Saucenew_ration_1x1-300x300.jpg' },
    { name: 'Dish 8', image: 'https://www.capecodmuseumtrail.com/wp-content/uploads/2018/01/Dim-Sum-300x300.jpg' },
    { name: 'Dish 9', image: 'https://i.pinimg.com/474x/78/ec/1b/78ec1b1038c8df26ecbd425fcc72f81b--brown-eggs-thousand-years.jpg' },
    { name: 'Dish 10', image: 'https://www.masalaherb.com/wp-content/uploads/2021/10/boston-roll-gog-1-300x300.jpg' },
    { name: 'Dish 11', image: 'https://peasandcrayons.com/wp-content/uploads/2015/02/healthy-triple-bean-tacos-vegetarian-0053-300x300.jpg' },
    { name: 'Dish 12', image: 'https://aubreyskitchen.com/wp-content/uploads/2021/01/frozen-french-fries-in-air-fryer-300x300.jpg' }
  ];


  return (
    <div className="gallery-container">
      {dishes.map((dish, index) => (
        <div key={index} className="gallery-item">
          <img src={dish.image} alt={dish.name} />
        </div>
      ))}
    </div>
  );
};
  
export default Gallery;