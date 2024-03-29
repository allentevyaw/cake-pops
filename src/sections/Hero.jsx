import React from 'react'
import {motion} from 'framer-motion'
import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
import styles from '../styles';
import cake from '../assets/logo.png'
import {CiLollipop} from 'react-icons/ci'
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    // <section className='bg-gradient-to-b from-white to-[#F40076] pb-20 w-full'>
    <section className='bg-[#FFFBF7] pb-20 w-full'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex flex-col lg:flex-row-reverse justify-center lg:gap-24`}
    >
      <div className="flex justify-center items-center flex-col z-10 mt-12">
        <motion.h1 
        variants={textVariant(1.1)} 
        className={`${styles.heroHeading} text-transparent bg-clip-text 
        bg-gradient-to-t from-purple-300 to-[#F40076]`}>
          Cake pops
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.subHeroHeading}
          text-transparent bg-clip-text 
          bg-gradient-to-t from-[#F40076] to-purple-300`}>by</h1>
        </motion.div>

        <motion.h1 
        variants={textVariant(1.1)} className={`${styles.heroHeading}
        text-transparent bg-clip-text bg-gradient-to-t from-purple-300 to-[#F40076]`}>
          andrea
        </motion.h1>
        </div>

        <motion.div
        variants={slideIn('left', 'tween', 0.1, .8)}
        className="mt-[30px] flex justify-center"
      >
        <div className='flex flex-col items-center'>
        <img
          src={cake}
          alt="hero_cover"
          className="sm:h-[400px] md:h-[450px] lg:h-[500px] h-[350px] object-cover 
          rounded-tl-[140px] rounded-tr-[140px] rounded-br-[140px] 
          rounded-bl-[140px] z-10 relative pb-7"
        />
      </div>


        </motion.div>
      </motion.div>
      <div className='w-full flex justify-center'>
      <Link to='/cake-pops/menu'>
          <button className='bg-gradient-to-r from-purple-300 to-[#F40076] font-semibold text-white 
            rounded-lg mb-10 p-3 ml-5 shadow-lg hover:scale-[110%] duration-200 flex justify-center'>
              <span className='flex items-center'>
                  <h1>LET'S POP </h1>
                  <CiLollipop className='hover:rotate-180 duration-300 text-[22px]'/>
                </span> 
            </button> 
        </Link>
      </div>
    </section>
  )
}

export default Hero