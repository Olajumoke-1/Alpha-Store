import React from 'react';
import fruitsImage from '../images/Fruits.png'
import veggiesImage from '../images/Veggies.png'
import proteinImage from '../images/Protein.png'
import snacksImage from '../images/Snacks.png'
import drinksImage from '../images/Drinks.png'
import cosmeticsImage from '../images/Cosmetics.png'
import bakeryImage from '../images/Bakery.png'
import bakingImage from '../images/Baking.png'
import cookingImage from '../images/Cooking.png'
import diabeImage from '../images/Diabe.png'
import soapImage from '../images/Soap.png'
import oilImage from '../images/Oil.png'

const categories = [
  { name: 'Fresh Fruits', img: fruitsImage},
  { name: 'Fresh Vegetables', img: veggiesImage },
  { name: 'Protein', img: proteinImage},
  { name: 'Snacks', img: snacksImage},
  { name: 'Drinks', img: drinksImage},
  { name: 'Cosmetics', img: cosmeticsImage},
  { name: 'Bakery', img: bakeryImage},
  { name: 'Baking', img: bakingImage},
  { name: 'Cooking', img: cookingImage},
  { name: 'Diabetics Food', img: diabeImage},
  { name: 'Soaps', img: soapImage},
  { name: 'Oil', img: oilImage},
  
  // ... add other categories similarly
];

const PopularCategories = () => (
  <div className="p-4 flex flex-col mr-10 ml-10 pr-10 pl-10 ">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Popular Categories</h2>
      <a href="/all-categories" className="text-basegreen hover:underline">
        View All →
      </a>
    </div>
    <div className="grid grid-cols-6 gap-4 pt-2">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center border w-45 h-48 border-gray-300 rounded-lg">
          <img src={category.img} alt={category.name} className="w-30 h-30 object-cover mt-6 " />
          <span className="text-sm">{category.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default PopularCategories;