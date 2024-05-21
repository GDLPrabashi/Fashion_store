
import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts';
import Banner from './components/Banner';
import Notification from './components/Notification';
import Footer from './components/Footer';
import AllProducts from './components/All';



function App() {

  React.useEffect (( )=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    <div>
      <Navbar />
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner />
      <Notification />
      <AllProducts/>
      <Footer/>
    </div>
  );
}

export default App;
