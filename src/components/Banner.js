import React from 'react';
import banner from '../asserts/shopping.jpg';
import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { MdLocalOffer } from "react-icons/md";

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid items-center grid-cols-1 gap-6 sm:grid-cols-2'>
        <div data-aos="zoom-in">
            <img src={banner} alt=""
            className='max-w-[400px] h-[350px] w-full mx-auto 
            drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
        </div>
        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-3xl font-bold sm:text-4xl'>Winter Sale Up To 50% Off</h1>
            <p className='pt-5 text-gray-500'>Embrace the chill with our Winter Sale, where savings reign supreme! Enjoy up to 50% off on a wide range of cozy essentials and stylish winter staples</p>
        <div className='gap-8 '>
           <div className='flex flex-row items-center gap-5 mt-3 mb-3 justify-left'>
            <GrSecure className='w-12 h-12 p-4 pt-4 pb-4 text-4xl rounded-full shadow-sm bg-violet-100' />
            <p >Quality Products</p>
            </div> 
            <div className='flex flex-row items-center gap-5 mt-3 mb-3 justify-left'>
            < TbTruckDelivery className='w-12 h-12 p-4 text-4xl bg-purple-200 rounded-full shadow-sm' />
            <p>Fast Delivery</p>
            </div>
            <div className='flex flex-row items-center gap-5 mt-3 mb-3 justify-left'>
            <MdPayments className='w-12 h-12 p-4 text-4xl bg-yellow-100 rounded-full shadow-sm' />
            <p>Easy payment method</p>
            </div>
            <div className='flex flex-row items-center gap-5 mt-3 mb-3 justify-left'>
            <MdLocalOffer className='w-12 h-12 p-4 text-4xl bg-green-100 rounded-full shadow-sm' />
            <p>Get offers</p>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
