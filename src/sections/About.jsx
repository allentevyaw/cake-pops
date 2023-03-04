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
      className={` max-w-[1000px] w-full grid sm:grid-cols-2 gap-8`}
    >
      <motion.div
        variants={rollIn('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={cake}
          alt="cake"
          className=" 
          object-contain rounded-lg hover:scale-110 duration-300"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <h1 className='text-[36px] font-bold text-white'>WELCOME!</h1>
        <p>My name is Andrea, and I started Cake Pop's by Andrea
             because I have a passion for making delicious cake pop,
            and I wanted to find a way to raise money for a cause that is near and dear
            to my heart, domestic violance. 10% of all proceeds go to 
            XXXX organization. 
        </p>

      </motion.div>
    </motion.div>
  </section>
    // <div className='w-full h-screen bg-[#F40076]'>About</div>
  )
}

export default About