import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, rollIn } from '../../utils/motion';
import cake from '../assets/happypop.png'
import styles from '../styles';



const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10 bg-gradient-to-b from-[#F40076] to-white`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={rollIn('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={cake}
          alt="cake"
          className="w-[50%] h-[50%] lg:w-[90%] object-contain rounded-lg hover:scale-110 duration-300"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <h1>WELCOME!</h1>
        <p>To my cake pop shop!</p>


      </motion.div>
    </motion.div>
  </section>
    // <div className='w-full h-screen bg-[#F40076]'>About</div>
  )
}

export default About