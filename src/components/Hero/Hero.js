import React from 'react';
import Image1 from "../../asserts/sale.jpg";
import Image2 from "../../asserts/shopping.jpg";
import Image3 from "../../asserts/shopping women.jpg";



const ImgeList = [
    {
        id: 1,
        img: Image1,
        title : "Upto 50% off on all Men's Wear",
        description : "50% off on all men's shirts at our shop! Enjoy half-price savings on a wide range of stylish shirts,perfect for any occasion. Hurry in while stocks last!"
       },
       {
        id:2,
        img:Image2,
        title : "30% off on all Women's Wear ",
        description : "Indulge in a fabulous shopping spree with 30% off on all women's wear at our shop! Elevate your wardrobe with chic styles and timeless classics while enjoying fantastic savings. Treat yourself to the latest trends without breaking the bank. Shop now and embrace the savings!"

       },
       {
        id: 3,
        img: Image3,
        title: "70% off on all Products Sale",
        description: "Enjoy massive savings of 70% off on all products at our shop! From fashion to electronics, seize this incredible opportunity to grab your favorites at unbeatable prices. Don't miss out on these exclusive deals, shop now!"
       }
]


const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center
    items-center '>
        {/*background pattern */}
      <div className='h-[600px] w-[600px] bg-primary/40
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
        
      </div>
      {/*  hero section*/}
      <div className='container pb-8 sm:pb-0'>
        
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
        {/* text content section*/}
            <div className='relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pt-0 sm:text-left sm:order-1 '>
            
            <h1 className='text-5xl font-bold sm:text-6xl lg:text-7xl'>
            30% off on all Women's Wear
            </h1>
            <p className='text-sm '>
            Indulge in a fabulous shopping spree with 30% off on all women's wear at our shop! Elevate your wardrobe with chic styles and timeless classics while enjoying fantastic savings.
             Treat yourself to the latest trends without breaking the bank. Shop now and embrace the savings!
            </p>
            <div>
                <button className='px-4 py-2 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105'>
                    Order now
                </button>
            </div>
            </div>
        {/* text contect section */}
        <div> 
            <div>
               <img src={Image3} alt=""
               className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
               sm:scale-125 object-contain mx-auto'/> 
            </div>
        </div>
            </div>
        
        </div>
        
        
      </div>
    </div>
  )
}

export default Hero;
