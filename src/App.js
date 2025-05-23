
import './App.css';
import Banner from './components/Banne';
import Navbar from './components/Navbar';
import Products from './components/Products';
import TopProducts from './components/TopProducts';
import Subscribe from "./components/Subscribe"
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Popup from './components/Popup';
import { useState } from 'react';


function App() {
    const [orderPopup, setOrderPopup] =useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
   <>
   <div>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>

   </div>

   </>
  );
}

export default App;
