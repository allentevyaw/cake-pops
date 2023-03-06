import React from 'react'
import oreo from '../assets/oreo.jpg'
import carrot from '../assets/carrot.jpg'
import carrot2 from '../assets/carrot2.jpg'
import sprinkle from '../assets/sprinkle.jpg'


const Gallery = () => {
  return (

<section class="overflow-hidden text-neutral-700 bg-gradient-to-b 
from-white to-[#F40076]">
  <div className='flex justify-center'>
    <h1 className='text-2xl font-bold uppercase text-[#F40076]'>
      Gallery
      </h1>
  </div>
    
  <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div class="-m-1 flex flex-wrap md:-m-2">
      <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="oreo"
            class="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src={oreo} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="carrot2"
            class="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src={carrot2} />
        </div>
        <div class="w-full p-1 md:p-2">
          <img
            alt="carrot"
            class="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src={carrot} />
        </div>
      </div>
      <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="sprinkle"
            class="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src={sprinkle} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="carrot2"
            class="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src={carrot2} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="oreo"
            class="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src={oreo} />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Gallery