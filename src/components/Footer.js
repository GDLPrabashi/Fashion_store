import React from 'react';
import logo from "../asserts/logo.jpg";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='p-4 mx-auto text-black bg-primary/40 md:px-14 max-w-screen-2xl'>
      <div className="flex flex-col md:flex-row">
        <div className='md:w-1/3'>
          <div className='space-y-8'>
            <a href="/" className='flex items-center space-x-3 '>
              <img src={logo} className='w-10 h-10' alt="Logo" />
              <span className='text-2xl font-bold'> Shopsy</span>
            </a>
            <p>Explore our curated selection of fashion-forward apparel, accessories, and lifestyle essentials designed to inspire and empower. From timeless classics to the latest trends, we offer something for every taste and occasion.</p>
          </div>
        </div>
        <div className="flex justify-between mt-5 md:w-2/3 md:mt-0">
          <div className='space-y-4'>
            <h4 className='text-xl font-semibold'>Important Links</h4>
            <ul className='space-y-3 cursor-pointer'>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Blog</a></li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h4 className='text-xl font-semibold'>Links</h4>
            <ul className='space-y-3 cursor-pointer'>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Blog</a></li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h4 className='text-xl font-semibold'>Contacts</h4>
            <div className='flex flex-row gap-2 cursor-pointer'>
              <FaFacebookSquare />
              <FaInstagram />
              <AiOutlineLinkedin />
            </div>
            <ul className='space-y-3 cursor-pointer'>
              <li>No,2 Kadawatha, Sri Lanka</li>
              <li>(012) 235 2568</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
