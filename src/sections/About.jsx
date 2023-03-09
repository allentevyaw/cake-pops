import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer, rollIn, slideIn } from '../../utils/motion';
import cake from '../assets/confused.png'
import styles from '../styles';



const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10 bg-gradient-to-t from-[#F40076] to-[#FFFBF7] text-white`}>
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
        <div className='max-w-[75%]'>
            <img
            src={cake}
            alt="cake"
            className=" 
            object-contain rounded-lg hover:rotate-12 duration-300"
            />
        </div>
      </motion.div>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <h1 className='text-[36px] font-bold text-white'>Hi!</h1>
        <p className='pb-3'>
        Welcome to the magical world of Cake Pops by Andrea! We're a team of passionate 
        creators who believe that life is too short to not enjoy the little things, 
        especially when they're as delicious as our bite-sized treats.
        </p>
        <p className='pb-3'> 
          Our journey started with a love for all things sweet and a desire to 
          create something truly unique. We hand-create each of our cake pops
           with fresh ingredients and decorate them with care, to bring a smile 
           to your face with every bite. From classic flavors like vanilla and 
           chocolate to funky combinations like fruity-pebbles, cinnamon toast crunch
          and strawberry cheesecake, we've got something to satisfy every sweet tooth.
        </p>
      </motion.div>
    </motion.div>
  </section>
    // <div className='w-full h-screen bg-[#F40076]'>About</div>
  )
}

export default About