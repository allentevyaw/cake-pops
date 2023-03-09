import React from 'react'
import oreo from '../assets/oreo.jpg'
import carrot from '../assets/carrot.jpg'
import carrot2 from '../assets/carrot2.jpg'
import sprinkle from '../assets/sprinkle.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../../utils/motion';

const photos = () => {
  return (

<motion.div 
className="flex flex-col bg-[#FFFBF7] m-auto p-auto">
      <h1
        className="flex justify-center py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 
        font-bold text-2xl md:text-4xl text-transparent bg-clip-text 
        bg-gradient-to-t from-purple-300 to-[#F40076] uppercase"
        variants={fadeIn('right', 'tween', 0.2, 0.5)}
      >
        Checkout our best sellers!
      </h1>
      <p>

      </p>

      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          className="flex flex-nowrap ml-5"
          variants={fadeIn('right', 'tween', 0.2, 0.5)}
        >

          {/* Card #1 */}
          <div className="inline-block px-3">
            <div
              className="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md 
              bg-gradient-to-b from-[#F40076] to-purple-300 hover:shadow-xl 
              transition-shadow duration-300 ease-in-out text-[#2B2B2B]"
            >
      <img
        className="rounded-t-lg w-96 h-60 object-cover hover:scale-110 duration-300 ease-in-out"
        src={oreo}
        alt="" />
    <div className="p-6 flex flex-col justify-center text-center items-center">
      <h5
        className="mb-2 text-xl leading-tight font-extrabold">
        Cookies 'n Cream Crush
      </h5>
      <p className="mb-4 text-base">
      Crushed Oreo cookies and chocolate cake coated in a smooth, creamy white chocolate shell.
      </p>
      </div>
            </div>
          </div>

{/* Card #2 */}
          <div className="inline-block px-3">
            <div
              className="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md
              bg-gradient-to-b from-[#F40076] to-purple-300 hover:shadow-xl 
              transition-shadow duration-300 ease-in-out text-[#2B2B2B]"
            >
      
      <img
        className="rounded-t-lg w-96 h-60 object-cover hover:scale-110 duration-300 ease-in-out"
        src={carrot}
        alt="carrot" />
    <div className="p-6 flex flex-col justify-center text-center items-center">
      <h5
        className="mb-2 text-xl leading-tight font-extrabold">
        Carrot Cake Crusader
      </h5>
      <p className="mb-4 text-base">
      Moist carrot cake and creamy cream cheese frosting, coated in a velvety white chocolate shell.
      </p>
      </div>
            </div>
          </div>

{/* Card #3 */}
          <div className="inline-block px-3">
            <div
              className="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md
              bg-gradient-to-b from-[#F40076] to-purple-300 hover:shadow-xl 
              transition-shadow duration-300 ease-in-out text-[#2B2B2B]"
            >
      <img
        className="rounded-t-lg w-96 h-60 object-cover"
        src={carrot2}
        alt="carrot" />
    <div className="p-6 flex flex-col justify-center text-center items-center">
      <h5
        className="mb-2 text-xl leading-tight font-extrabold">
        Card title
      </h5>
      <p className="mb-4 text-base">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      </div>
            </div>
          </div>

{/* Card #4 */}
          <div className="inline-block px-3">
            <div
              className="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md
              bg-gradient-to-b from-[#F40076] to-purple-300 hover:shadow-xl 
              transition-shadow duration-300 ease-in-out text-[#2B2B2B]"
            >
      <img
        className="rounded-t-lg w-96 h-60 object-cover"
        src={sprinkle}
        alt="sprinkle" />
    <div className="p-6 flex flex-col justify-center text-center items-center">
      <h5
        className="mb-2 text-xl font-medium leading-tight">
        Card title
      </h5>
      <p className="mb-4 text-base">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      </div>
            </div>
          </div>

          <div className="inline-block px-3">
            <div
              className="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md
              bg-gradient-to-b from-[#F40076] to-purple-300
               hover:shadow-xl transition-shadow duration-300 ease-in-out text-[#2B2B2B]"
            ></div>
          {/* </div>
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div> */}
          </div>
        </div>
      </div>
</motion.div>
  )
}

export default photos