import React, {useState, useEffect} from 'react'
import styles from '../styles'
import {CiLollipop} from 'react-icons/ci'
import {BiMenuAltRight} from 'react-icons/bi'
import {motion} from 'framer-motion'



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
    <nav className='w-full h-[80px] shadow-md text-[24px] font-extrabold text-white br-gradient bg-[#F40076]'>

        <div className='mx-auto flex justify-between gap-8 p-5'>
            <div>
            </div>
            <div className='flex leading-[30px] text-white'>
            <h2 className=''>
                ANDREA'S CAKE POPS
            </h2>

            <motion.div
            initial={{ scale: 2 }}
            whileInView={{ rotate: 360, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 180,
                damping: 35
            }}>
                <CiLollipop className='text-[30px]'/>
            </motion.div>
            </div>
            <BiMenuAltRight />
        </div>

    </nav>
  )
}

export default Navbar