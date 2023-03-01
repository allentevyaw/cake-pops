import React from 'react'
import {motion} from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
import styles from '../styles';
import cake from '../assets/cake.png'


const Hero = () => {
  return (
    <section className=''>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex flex-col mt-12`}
    >
      <div className="flex justify-center items-center flex-col z-10">
        <motion.h1 
        variants={textVariant(1.1)} className={`${styles.heroHeading}
        text-transparent bg-clip-text bg-gradient-to-t from-purple-300 to-[#F40076]`}>
          Cake pops
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.subHeroHeading}
          text-white`}>by</h1>
        </motion.div>

        <motion.h1 
        variants={textVariant(1.1)} className={`${styles.heroHeading}
        text-transparent bg-clip-text bg-gradient-to-t from-purple-300 to-[#F40076]`}>
          andrea
        </motion.h1>
        </div>

        <motion.div
        variants={slideIn('right', 'tween', 0.1, .8)}
        className="mt-[30px] flex justify-center"
      >
        <img
          src={cake}
          alt="hero_cover"
          className="w-[50%] md:w-[40%] sm:h-[500px] h-[350px] object-cover 
          rounded-tl-[140px] rounded-tr-[140px] rounded-br-[140px] 
          rounded-bl-[140px] z-10 relative pb-7"
        />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero