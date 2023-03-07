import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPinterest} from 'react-icons/bs'
import {SiEtsy} from 'react-icons/si'
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn, slideIn } from '../../utils/motion';
import styles from '../styles';
import cake from '../assets/confused.png'
import happy from '../assets/happypop.png'






const Social = () => {

  return (
    <section className={`${styles.paddings} relative z-10 bg-purple-300`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto lg:px-24 gap-8`}
    >
<div className='w-full flex justify-center flex-col items-center'>
<h1 className=' text-white 
font-extrabold text-2xl md:text-3xl pb-5 uppercase'>
  Don't forget to follow us!</h1>
  <p>You don't want to miss our regular off-menu creations</p>
  </div>
<div className='flex items-center justify-center px-6 text-2xl text-white'>
<div className='max-w-[20%]'>
            <img
            src={cake}
            alt="cake"
            className=" 
            object-contain rounded-lg hover:rotate-12 duration-300"
            />
        </div>
<motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="hover:text-[#DF98FA] cursor-pointer"
      >
        <span className='flex justify-between items-center'>
          <AiOutlineInstagram />
          <h1>cakepopsbyandrea</h1>
        </span>
</motion.div>

<div className='max-w-[20%]'>
            <img
            src={happy}
            alt="cake"
            className=" 
            object-contain rounded-lg hover:rotate-12 duration-300"
            />
        </div>

</div>

    </motion.div>
  </section>
  )
}

export default Social