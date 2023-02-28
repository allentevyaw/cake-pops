import React from 'react'
import {motion} from 'framer-motion'
import { staggerContainer, textVariant } from '../../utils/motion';
import styles from '../styles';


const Hero = () => {
  return (
    <div className='w-full h-screen'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex flex-col mt-10`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 
        variants={textVariant(1.1)} className={`${styles.heroHeading}
        text-transparent bg-clip-text bg-gradient-to-t from-indigo-300 via-purple-300 to-pink-300`}>
          Andrea's
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.subHeroHeading} text-white`}>Cake Pops</h1>
        </motion.div>
        </div>

      </motion.div>
    </div>
  )
}

export default Hero