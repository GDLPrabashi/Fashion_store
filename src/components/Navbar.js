import React from 'react';
import Logo from "../asserts/logo.jpg";
import { MdSearch } from "react-icons/md";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";

const Menu = [
    {
        id:1,
    name : "Home",
    link:"/#"
    },
    {
        id:2,
    name : "Top Rated",
    link:"/#services"
    },
    {
        id:3,
    name : "Kids wear",
    link:"/#"
    },
    {
        id:4,
    name : "Mens wear",
    link:"/#"
    },
    {
        id:5,
    name : "Electronics",
    link:"/#"
    },
];

const DropdownLinks =[
    {
        id:1,
        name:"Trending Products",
        link:"/#"
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#"
    },
    {
        id:3,
        name:"Top Rated",
        link:"/#"
    },

]

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:;bg-gray-900
     dark:text-white duration-200 relative z-40'>
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <a href="#" className='font-bold text-2xl 
                sm:text-3xl flex gap-2 '>
                    <img src={Logo} alt="logo" 
                    className='w-10 uppercase'/>
                    Shopsy
                </a>
            
            <div>
                <div className='flex justify-between items-center gap-4 '>
                <div className=' relative group hidden sm:block'>
                    <input type ="text" 
                    placeholder='search'
                    className='w-[200px] sm:w-[200px]
                    group-hover:w-[300px] transition-all duration-300
                    rounded-full border-gray-800 px-2 py-1 focus:outline-none
                    focus:border-1 focus:border-primary'/>
                
                
                <MdSearch  className='text-gray-500
                 group-hover:text-primary absolute top-1/4 translate-y-1/2 right-3'/>
                </div>
                
                {/* order button */}
                <button onClick={()=>{
                    alert("Ordering is not available yet")
                }} className='bg-gradient-to-r from-primary to bg-secondary
                transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                    <span className='group-hover:block hidden transition duration-200'>Order</span>
                    <FaShoppingCart  className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                </button>
                </div>
                </div>
            </div>
        </div>
        {/*lower navbar */}
        <div className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {Menu.map((data)=> (
                        <li key ={data.id}>
                            <a href ={data.link}
                            className='inline-block px-4 hover:text-primary duration-200'>{data.name}
                            
                            </a>
                            </li>
                            ))}
                        
                        {/*drop down menu */}
                        <li className='group relative cursor-pointer'>
                            <a href="#" className='flex items-center gap-[2px] py-2'>
                                Trending Products
                                <span>
                                    <FaCaretDown 
                                     className='transition-all
                                     duration-200
                                     group-hover:rotate-180'/>
                                </span>
                            </a>
                            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md
                            bg-white p-2 text-black shadow-md'>
                                <ul>
                                    {DropdownLinks.map((data)=>(
                                        <li key={data.id}>
                                            <a href={data.link}
                                            className='inline-block w-full rounded-md p-2
                                            hover:bg-primary/20'>
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            </li>

                    

                </ul>
        </div>
    </div>
  )
}

export default Navbar;
