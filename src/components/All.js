import React from 'react';
import { FaStar } from "react-icons/fa";
import Img1 from "../asserts/kids.jpg";
import Img2 from "../asserts/saari.jpg";
import Img3 from "../asserts/salvari.jpg";
import Img4 from "../asserts/trousers.jpg";
import Img5 from "../asserts/frock.jpg";

const ProductsData  = [
    {
      id:1,
      img:Img1,
      title: "Kids wear",
      rating :5.0,
      color:"Red",
      aosDelay:"0"  
    },
    {
        id:2,
        img:Img2,
        title: "Saari ",
        rating :4.8,
        color:"Ash",
        aosDelay:"0"  
      },
      {
        id:3,
        img:Img3,
        title: "Salavari",
        rating :4.7,
        color:"Blue",
        aosDelay:"0"  
      },
      {
        id:4,
        img:Img4,
        title: "Trousers",
        rating :4.6,
        color:"Green",
        aosDelay:"0"  
      },
      {
        id:5,
        img:Img5,
        title: "frock",
        rating :4.5,
        color:"white",
        aosDelay:"0"  
      },
]

const AllProducts = () => {
  return (
    <div className='mb-12 mt-14'>
      <div>
        {/*header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos ="fade-up"className='text-sm text-primary'>Top Selling Products for you</p>
            <h1 data-aos ="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos ="fade-up" className='text-xs text-gray-400'>Discover our latest collection of stylish and affordable clothing, designed to elevate your everyday look. From timeless basics to trendy statement pieces, we have everything you need to express your unique style effortlessly. Explore our range today and redefine your wardrobe with our must-have essentials.</p>
        </div>
        {/*body section */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>

            {/* card section  */}
            {ProductsData.map((data)=>(
              <div 
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id} 
              className='space-y-3'>
                <img src={data.img} alt=""
                className='h-[220px] w-[150px] object-cover rounded-md' />
              <div>
                <h3 className='font-semibold'>{data.title}</h3>
                
                <div className='flex items-center gap-1'>
                
        
                </div>
              </div>
              
              
              </div>
              

            ))}

        </div>
      </div>
    </div>
  )
}

export default AllProducts;
