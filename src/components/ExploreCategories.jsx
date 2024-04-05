import React from 'react';
import peachImage from '../images/Peach.png';
import vegetableImage from '../images/Vegetable.png';
import strawberryImage from '../images/Strawberry.png';
import appleImage from '../images/Apple.png';
import orangeImage from '../images/Orange.png';
import potatoImage from '../images/Potato.png';
import carrotImage from '../images/Carrot.png';

const exploreCategories = [
  { name: 'Peach', image: peachImage, bgColor: 'bg-peachcolor', itemCount: 20 },
  { name: 'Vegetables', image: vegetableImage, bgColor: 'bg-vegcolor', itemCount: 220 },
  { name: 'Strawberry', image: strawberryImage, bgColor: 'bg-strawgreen', itemCount: 10 },
  { name: 'Apples', image: appleImage, bgColor: 'bg-applecolor', itemCount: 40 },
  { name: 'Orange', image: orangeImage, bgColor: 'bg-orangecolor', itemCount: 25 },
  { name: 'Potato', image: potatoImage, bgColor: 'bg-potatocolor', itemCount: 3 },
  { name: 'Carrot', image: carrotImage, bgColor: 'bg-carrotgreen', itemCount: 9 },
  // ... add other categories similarly
];

const ExploreCategories = () => {
  return (
    <div className="max-w-[1640px] ml-8 px-8 py-12">
      <h1 className="text-fontgreen font-bold text-4xl mb-8">Explore Categories</h1>
      <div className="flex flex-wrap gap-6 justify-start">
        {exploreCategories.map((category, index) => (
          <div key={index} className={`w-36 h-52 rounded-lg flex flex-col items-center relative p-4 ${category.bgColor}`}>
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-cover mb-2"
            />
            <div className="text-center mt-4">
              <h2 className="font-bold text-sm">{category.name}</h2>
              <p className="text-xs">{category.itemCount} items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
