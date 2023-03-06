import React from 'react'
import oreo from '../assets/oreo.jpg'
import carrot from '../assets/carrot.jpg'
import carrot2 from '../assets/carrot2.jpg'
import sprinkle from '../assets/sprinkle.jpg'
import {motion} from 'framer-motion'
import { fade, staggerContainer } from '../../utils/motion'



const Gallery = () => {
  return (

<section className="overflow-hidden text-neutral-700 bg-gradient-to-b 
from-white to-[#F40076]">

<motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>

  <motion.div 
  className='flex justify-center'
  variants={fade}
  initial='hidden'
  whileInView='show' 
  >
    <h1 className='text-2xl font-bold uppercase text-[#F40076]'>
      Gallery
      </h1>
  </motion.div>
    
  <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <motion.div className="w-1/2 p-1 md:p-2" variants={fade}>
          <img
            alt="oreo"
            className="block h-full w-full rounded-lg object-cover 
            object-center shadow-md duration-300 ease-in-out hover:scale-110"
            src={oreo} />
        </motion.div>
        <motion.div className="w-1/2 p-1 md:p-2" variants={fade}>
          <img
            alt="carrot2"
            className="block h-full w-full rounded-lg object-cover 
            object-center shadow-md duration-300 ease-in-out hover:scale-110"
            src={carrot2} />
        </motion.div>
        <motion.div className="w-full p-1 md:p-2" variants={fade}>
          <img
            alt="carrot"
            className="block h-full w-full rounded-lg object-cover 
            object-center shadow-md"
            src={carrot} />
        </motion.div>
      </div>
      <div className="flex w-1/2 flex-wrap over overflow-hidden">
        <motion.div className="w-full p-1 md:p-2" variants={fade}>
          <img
            alt="sprinkle"
            className="block h-full w-full rounded-lg object-cover 
            object-center shadow-md"
            src={sprinkle} />
        </motion.div>
        <motion.div className="w-1/2 p-1 md:p-2" variants={fade}>
          <img
            alt="carrot2"
            className="block h-full w-full rounded-lg object-cover 
            object-center shadow-md duration-300 ease-in-out hover:scale-110"
            src={carrot2} />
        </motion.div>
        <motion.div className="w-1/2 p-1 md:p-2 overflow-hidden rounded-lg" variants={fade}>
          <img
            alt="oreo"
            className="block h-full w-full rounded-lg object-cover 
            object-center shadow-md duration-300 ease-in-out hover:scale-110"
            src={oreo} />
        </motion.div>
      </div>
    </div>
  </div>
  </motion.div>
</section>
  )
}

export default Gallery