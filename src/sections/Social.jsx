import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPinterest} from 'react-icons/bs'
import {SiEtsy} from 'react-icons/si'
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn } from '../../utils/motion';
import styles from '../styles';




const Social = () => {

  return (
    <section className={`${styles.paddings} relative z-10 bg-[#F40076]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto lg:px-24 gap-8`}
    >
<div className='flex justify-between px-12 text-[36px] text-white'>
<motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="hover:text-[#DF98FA] cursor-pointer"
      >
        <AiOutlineInstagram />
</motion.div>
<motion.div
        variants={fadeIn('left', 'tween', 0.3, 1.5)}
        className="hover:text-[#DF98FA] cursor-pointer"
      >
        <HiOutlineMail />
</motion.div>
<motion.div
        variants={fadeIn('left', 'tween', .4, 2)}
        className="hover:text-[#DF98FA] cursor-pointer"
      >
        <BsPinterest />
</motion.div>
<motion.div
        variants={fadeIn('left', 'tween', .6, 3)}
        className="hover:text-[#DF98FA] cursor-pointer"
      >
        <SiEtsy />
</motion.div>
</div>

    </motion.div>
  </section>
  )
}

export default Social