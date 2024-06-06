import React, { useState } from 'react';
import Redish from '../images/Redish.png.jpg';
import Potato from '../images/Potatoo.png.jpg';
import Tomato from '../images/Tomatos.png.png';
import Greenbeans from '../images/Greenbeans.png.png';
import Chinesecabbage from '../images/Cabbage.png.jpg';
import RedishInfo from '../images/RedishInfo.png.jpg';
import PotatoInfo from '../images/PotatoInfo.png.jpg';
import TomatoInfo from '../images/TomatoInfo.png.jpg';
import GreenBeansInfo from '../images/GreenBeansInfo.png.jpg';
import CabbageInfo from '../images/ChineseCabbage.png.jpg';

const ProductCard = ({ category, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(category.name); // Pass the category name to the parent component
  };

  return (
    <div className="w-52 h-auto rounded-lg bg-white shadow-md flex flex-col">
      <div className="flex-1">
        <img src={category.image1} alt={`${category.name} Image 1`} className="w-full h-full object-cover mb-2" onClick={handleAddToCart} />
      </div>
      <div className="flex-1">
        <img src={category.image2} alt={`${category.name} Image 2`} className="w-full h-full object-cover mb-2 pl-2" onClick={handleAddToCart} />
      </div>
    </div>
  );
};

const FruitsAndVegetables = () => {
  const [cartAlert, setCartAlert] = useState(null);

  const addToCart = (itemName) => {
    setCartAlert(`${itemName} added to cart`);
    setTimeout(() => {
      setCartAlert(null);
    }, 3000); // Hide the alert after 3 seconds
  };

  const exploreCategories = [
    { name: 'Category 1', image1: Redish, image2: RedishInfo, bgColor: 'bg-color1'},
    { name: 'Category 2', image1: Potato, image2: PotatoInfo, bgColor: 'bg-color2'},
    { name: 'Category 3', image1: Tomato, image2: TomatoInfo, bgColor: 'bg-color3'},
    { name: 'Category 4', image1: Greenbeans, image2: GreenBeansInfo, bgColor: 'bg-color4'},
    { name: 'Category 5', image1: Chinesecabbage, image2: CabbageInfo, bgColor: 'bg-color5'},
  ];

  const categoriesToDisplay = exploreCategories.slice(0, 5);

  return (
    <div className="max-w-[1640px] ml-8 px-8 py-12 relative">
      <h1 className="text-fontgreen font-bold text-4xl mb-8">Fruits and Vegetables</h1>
      <div className="grid grid-cols-5 gap-4">
        {categoriesToDisplay.map((category, index) => (
          <ProductCard key={index} category={category} onAddToCart={addToCart} />
        ))}
      </div>
      {cartAlert && (
        <div className="absolute bottom-4 right-4 bg-basegreen text-white rounded-md p-2 shadow-md">
          {cartAlert}
        </div>
      )}
    </div>
  );
};

export default FruitsAndVegetables;
