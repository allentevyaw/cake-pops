import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer, rollIn, slideIn } from '../../utils/motion';
import cake from '../assets/confused.png'
import styles from '../styles';



const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10 bg-[#FFFBF7] text-[#2B2B2B] flex justify-center`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` max-w-[1000px] w-full flex flex-col md:flex-row gap-8`}
    >
      <motion.div
        variants={rollIn('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div className='max-w-[50%]'>
            <img
            src={cake}
            alt="cake"
            className=" 
            object-contain rounded-lg flex lg:hidden"
            />
        </div>
      </motion.div>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex justify-center flex-col text-center"
      >
        <h1 className='text-[36px] font-bold pb-4'>WELCOME!</h1>
        <p className='pb-3'>
        To the magical world of <span className='text-[#F40076] font-semibold'>Cake Pops by Andrea!</span> We're a team of passionate 
        creators who believe that life is too short to not enjoy the little things, 
        especially when they're as delicious as our bite-sized treats.
        </p>
        <p className='pb-3'> 
          Our journey started with a love for all things sweet and a desire to 
          create something truly unique. We hand-create each of our cake pops
           with fresh ingredients and decorate them with care, to bring a smile 
           to your face with every bite. From classic flavors like <span className='text-[#F40076] font-semibold'>vanilla</span> and 
           <span className='text-[#F40076] font-semibold'> chocolate</span> to funky combinations like <span className='text-[#F40076] font-semibold'>fruity-pebbles, cinnamon toast crunch</span> and 
           <span className='text-[#F40076] font-semibold'> strawberry
            cheesecake</span>, we've got something to satisfy every sweet tooth.
        </p>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default About