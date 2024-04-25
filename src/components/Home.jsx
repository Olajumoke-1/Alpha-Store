import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import PopularCategory from './PopularCategories'
import ExploreCategories from './ExploreCategories'
import FruitsAndVeg from './FruitsVeg'
import OfferSection from './OfferSection'
import AboutUs from './AboutUs'
import PreFooter from './PreFooter'
import Footer from './Footer'


const Home = () => {
  return (
    <div className="font-quicksand font-medium">
      <NavBar/>
      <HeroSection/>
      <PopularCategory/>
      <ExploreCategories/>
      <FruitsAndVeg/>
      <OfferSection/>
      <AboutUs/>
      <PreFooter/>
      <Footer/>
    
    </div>
  )
}

export default Home