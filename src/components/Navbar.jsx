import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { BiChevronDown, BiRestaurant } from 'react-icons/bi'
import Button from '../layouts/button'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  }

  return (
    <div className='fixed w-full'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-32 px-5
         bg-white shadow-[0_3px_10px_rgba(0,0,0,0.4)]'>
          <div className='flex flex-row items-center'>
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className='text-xl font-semibold'>FoodieWeb</h1>
          </div>

          {/*...................Large screen devices......................... */}

          <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
            <Link to='home' spy={true} smooth={true} duration={500} className=' hover:text-brightcolor 
            transition-all cursor-pointer'>Home</Link>
            <div className='relative group'>
              <div className='flex items-center gap-1'>
                <Link to='dishes' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
                transition-all cursor-pointer'>Dishes</Link>
                <BiChevronDown className='cursor-pointer' size={25} />
              </div>
              <ul className='absolute hidden space-y-2 group-hover:block border bg-white
               border-gray-200 rounded-lg p-5'>
                <li>
                  <Link to='dishes' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
                  transition-all cursor-pointer'>Spicy</Link>
                </li>

                <li>
                  <Link to='dishes' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
                  transition-all cursor-pointer'>Tasty</Link>
                </li>

                <li>
                  <Link to='dishes' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
                  transition-all cursor-pointer'>Delicious</Link>
                </li>

                <li>
                  <Link to='dishes' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
                  transition-all cursor-pointer'>Cripsy</Link>
                </li>

              </ul>
            </div>
            <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
            transition-all cursor-pointer'>About</Link>
            <Link to='menu' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
            transition-all cursor-pointer '>Menu</Link>
            <Link to='review' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
            transition-all cursor-pointer'>Reviews</Link>

            <Button title='Login' />
            <Button title='Sign up' />
          </nav>
          
          {/*..................Mobile view......... */}

          <div className='md:hidden flex item-center'>
            {menu ? (<AiOutlineClose size={25} onClick={handleChange} className='cursor-pointer' />)
              : (<AiOutlineMenuUnfold size={25} onClick={handleChange} className='cursor-pointer' />)}
          </div>

        </div>
        <div className={`${menu ? "-translate-x-0" : "-translate-x-full"} lg:hiddden flex flex-col 
        absolute top-20 text-2xl text-center left-0 pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300
         bg-black text-white font-semibold`}>
          <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
        transition-all cursor-pointer'>About</Link>
          <Link to='dishes' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
        transition-all cursor-pointer'>Dishes</Link>
          <Link to='menu' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
        transition-all cursor-pointer'>Menu</Link>
          <Link to='review' spy={true} smooth={true} duration={500} className='hover:text-brightcolor 
        transition-all cursor-pointer'>Review</Link>
          <Button title='Login' />
        </div>
      </div>
    </div>
  )
}

export default Navbar