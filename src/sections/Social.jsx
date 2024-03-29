import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {FaTiktok} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn } from '../../utils/motion';
import styles from '../styles';


const Social = () => {

  return (
    <section className={`py-3 relative z-10 bg-[#2B2B2B] text-2xl`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto  
      flex justify-center text-white`}
    >
  <motion.div
          variants={fadeIn('right', 'tween', 0.2, 0.5)}
          className="hover:text-[#F40076] cursor-pointer pr-16"
        >
          <a href='https://www.instagram.com/cakepopsbyandrea/'>
            <AiOutlineInstagram className='hover:scale-110 duration-200'/>
          </a>
  </motion.div>
  <motion.div
          variants={fadeIn('right', 'tween', 0.3, 1)}
          className="hover:text-[#F40076] cursor-pointer"
        >
          <a href='mailto:cakepopsbyandrea@yahoo.com'>
            <HiOutlineMail className='hover:scale-110 duration-200'/>
          </a>
  </motion.div>
  <motion.div
          variants={fadeIn('right', 'tween', 0.4, 1.5)}
          className="hover:text-[#F40076] cursor-pointer pl-16"
        >
            <FaTiktok className='hover:scale-110 duration-200'/>
  </motion.div>
</motion.div>
  </section>
  )
}

export default Social