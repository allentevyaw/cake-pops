import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {FaTiktok} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn, slideIn } from '../../utils/motion';
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
          className="hover:text-[#DF98FA] cursor-pointer pr-16"
        >
            <AiOutlineInstagram />
  </motion.div>
  <motion.div
          variants={fadeIn('right', 'tween', 0.3, 1)}
          className="hover:text-[#DF98FA] cursor-pointer"
        >
            <HiOutlineMail />
  </motion.div>
  <motion.div
          variants={fadeIn('right', 'tween', 0.4, 1.5)}
          className="hover:text-[#DF98FA] cursor-pointer pl-16"
        >
            <FaTiktok />
  </motion.div>
</motion.div>
  </section>
  )
}

export default Social