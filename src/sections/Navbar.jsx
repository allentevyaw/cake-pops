import React, {useState} from 'react'
import {CiLollipop} from 'react-icons/ci'
import {motion} from 'framer-motion'
import { navVariants } from '../../utils/motion'
import bubble from '../assets/drip.png'




const Navbar = () => {

const [nav, setNav] = useState(false)
const [hamburger, sethamburger] = useState(false)

const handleHamburgerClick = () => {
    sethamburger(prevState => !prevState)
}
const handleClick = () => setNav(prevNav => !prevNav)


const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white 
transition ease transform duration-300 bg-white`;


    
  return (
    <div className=''>
    <motion.nav 
        className='w-full h-[70px] shadow-md text-[14px] md:text-[16px] font-extrabold
         text-[#FFFBF7] br-gradient bg-[#F40076]'
            variants={navVariants}
            initial='hidden'
            whileInView='show'>           

        <div className='mx-auto flex justify-between gap-8 p-4'>
            <div className='flex text-[#FFFBF7] items-center'>
            <h2 className='z-10'>
                CAKE POPS BY ANDREA
            </h2>

            <motion.div
            className='z-10'
            initial={{ scale: 1 }}
            whileInView={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 180,
                damping: 35,
                delay: 1
            }}>
                <CiLollipop className='text-[20px] md:text-[30px]'/>
            </motion.div>
            </div>
            <div>
                <ul className='md:flex items-center hidden uppercase'>
                      <li className='link-underline'>Menu</li>
                      <li className='link-underline'>About</li>
                      <li className='link-underline'>Contact</li>
                </ul>
            </div>

    <button
      className="flex flex-col h-12 w-12 justify-center items-center group z-50 md:hidden"
      onClick={handleClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          nav
            ? "rotate-45 translate-y-3"
            : ""
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
            nav ? "opacity-0" : ""
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
            nav
            ? "-rotate-45 -translate-y-3"
            : ""
        }`}
      />
    </button>

        </div>
        <div className='w-[200px] md:w-[250px] z-0'>
                <img src={bubble} className='mx-[-6px] my-[-10px]'/>
        </div>
    </motion.nav>

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full min-h-screen bg-[#1B2739]/70 z-40' : ''}>
        <div className={nav ? 'fixed right-0 top-0 w-[45%] sm:w-[30%] h-screen bg-gradient-to-t from-[#F40076] to-purple-300 p-10 ease-in duration-100 z-50' : 
                        'fixed left-[-100] top-0 p-10'}>
            <div className={nav ? 'flex' : 'hidden'}>

            <ul className='py-8 flex-col text-2xl text-[#FFFBF7] uppercase mx-[-10px]'>
                <li className='py-6 hover:text-pink-400 duration-100'>Menu</li>
                <li className='py-6 hover:text-pink-400'>About</li>
                <li className='py-6 hover:text-pink-400'>Contact</li>
            </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar