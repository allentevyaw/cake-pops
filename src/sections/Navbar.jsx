import React, {useState, useEffect} from 'react'
import {CiLollipop} from 'react-icons/ci'
import {BiMenuAltRight} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { navVariants } from '../../utils/motion'
import bubble from '../assets/bubble.png'




const Navbar = () => {
const [shadow, setShadow] = useState(false)

useEffect(() => {
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    window.addEventListener('scroll', handleShadow)
}, [])

    
  return (
    <motion.nav 
        className='w-full h-[70px] shadow-md text-[16px] font-extrabold
         text-white br-gradient bg-[#F40076]'
            variants={navVariants}
            initial='hidden'
            whileInView='show'>           

        <div className='mx-auto flex justify-between gap-8'>

            <div className='flex leading-[30px] text-white'>
            <h2 className='z-10'>
                CAKE POPS BY ANDREA
            </h2>

            <motion.div
            initial={{ scale: 1 }}
            whileInView={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 180,
                damping: 35,
                delay: 2
            }}>
                <CiLollipop className='text-[30px]'/>
            </motion.div>
            </div>
            <BiMenuAltRight />
        </div>
        <div className='w-[250px]'>
                <img src={bubble} className='mx-[-6px] mt-[-32px]'/>
            </div>

    </motion.nav>
  )
}

export default Navbar