import React from 'react';
import img1 from "../asserts/casual wear.jpg";
import img2 from "../asserts/printed shirt.jpg";
import img3 from "../asserts/women shirt.jpg"

const ProductsData = [
    {
        id:1,
        img:img1,
        title:"Casual Wear",
        description:"Elevate your everyday look with our men's casual wear shirts. Crafted for comfort and style, our collection features versatile shirts that effortlessly blend casual elegance with modern trends"
    },
    {
        id:2,
        img:img2,
        title:"Printed shirt",
        description:"Make a bold statement with our men's printed shirts. Our collection showcases an array of eye-catching designs, from vibrant patterns to subtle prints, allowing you to express your individuality with style"
    },
    {
        id:3,
        img:img3,
        title:"Women shirt",
        description:"Discover timeless elegance and modern flair with our women's shirts. From crisp button-downs to flowy blouses, our collection offers versatile options for every occasion"
    },

]

const TopProducts = () => {
  return (
    <div>
      <div className='container'>
        {/*header section */}
        <div className='text-center  mb-10 max-w-[600px] mx-auto'>
            <p data-aos ="fade-up"className='text-sm text-primary'>Top Rated Products for you</p>
            <h1 data-aos ="fade-up" className='text-3xl font-bold'>Best Products</h1>
            <p data-aos ="fade-up" className='text-xs text-gray-400'>Introducing our curated selection of top men's products, handpicked for style, quality, and versatility. From classic essentials to cutting-edge innovations, our collection offers everything today's modern man needs to look and feel his best. Whether you're upgrading your wardrobe or searching for the perfect gift, explore our top men's products and elevate your lifestyle effortlessly.</p>
        </div>
        {/* body section */}
        <div className='grid items-center justify-center grid-cols-1 gap-20 max-w-screen-2xl gap-50 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 place-items-center'>
            {ProductsData.map((data)=>(
                <div 
                className='relative items-center duration-200 bg-white shadow-2xl rounded-2xl hover:cursor-pointer hover:bg-white hover:text-black justify-center max-w-[300px] '>
                    <div className='gap-10'>
                        <img src={data.img} alt="" className='h-[220px] max-w-[300px] object-cover rounded-md ' />
                    </div>
                    <div className='items-center justify-center pt-5 '>
                        <div className='font-bold'>
                        {data.title  }
                        </div>
                        <div>
                        {data.description}
                        </div>
                        <button  className='px-4 py-2 mt-5 mb-5 ml-5 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105'>Order now</button>
                    </div>
                        
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts;
