import React from 'react'
import oreo from '../assets/oreo.jpg'
import carrot from '../assets/carrot.jpg'
import carrot2 from '../assets/carrot2.jpg'
import sprinkle from '../assets/sprinkle.jpg'

const photos = () => {
  return (

<div class="flex flex-col bg-white m-auto p-auto">
      <h1
        class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 
        font-bold text-2xl md:text-4xl text-transparent bg-clip-text 
        bg-gradient-to-t from-purple-300 to-[#F40076] uppercase"
      >
        Checkout our best sellers!
      </h1>

      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10"
        >

          {/* Card #1 */}
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md 
              bg-gradient-to-b from-[#F40076] to-purple-300 hover:shadow-xl 
              transition-shadow duration-300 ease-in-out text-black"
            >
      <img
        class="rounded-t-lg w-96 h-60 object-cover hover:scale-110 duration-300 ease-in-out"
        src={oreo}
        alt="" />
    <div class="p-6 flex flex-col justify-center text-center items-center">
      <h5
        class="mb-2 text-xl leading-tight font-extrabold">
        Cookies 'n Cream Crush
      </h5>
      <p class="mb-4 text-base">
      Crushed Oreo cookies and chocolate cake coated in a smooth, creamy white chocolate shell.
      </p>
      </div>
            </div>
          </div>

{/* Card #2 */}
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md bg-gradient-to-t from-[#F40076] to-purple-300 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
      
      <img
        class="rounded-t-lg w-96 h-60 object-cover hover:scale-110 duration-300 ease-in-out"
        src={carrot}
        alt="" />
    <div class="p-6 flex flex-col justify-center text-center items-center">
      <h5
        class="mb-2 text-xl leading-tight font-extrabold">
        Carrot Cake Crusader
      </h5>
      <p class="mb-4 text-base">
      Moist carrot cake and creamy cream cheese frosting, coated in a velvety white chocolate shell.
      </p>
      </div>
            </div>
          </div>

{/* Card #3 */}
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
      <img
        class="rounded-t-lg w-96 h-60 object-cover"
        src={carrot2}
        alt="" />
    <div class="p-6 flex flex-col justify-center text-center items-center">
      <h5
        class="mb-2 text-xl leading-tight font-extrabold">
        Card title
      </h5>
      <p class="mb-4 text-base">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      </div>
            </div>
          </div>

{/* Card #4 */}
          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
      <img
        class="rounded-t-lg w-96 h-60 object-cover"
        src={sprinkle}
        alt="" />
    <div class="p-6 flex flex-col justify-center text-center items-center">
      <h5
        class="mb-2 text-xl font-medium leading-tight">
        Card title
      </h5>
      <p class="mb-4 text-base">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      </div>
            </div>
          </div>

          <div class="inline-block px-3">
            <div
              class="w-96 h-96 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
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
</div>
  )
}

export default photos