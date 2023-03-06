import React from 'react'
import oreo from '../assets/oreo.jpg'
import carrot from '../assets/carrot.jpg'
import carrot2 from '../assets/carrot2.jpg'
import sprinkle from '../assets/sprinkle.jpg'


const Gallery = () => {
  return (

<section class="overflow-hidden text-neutral-700">
  <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div class="-m-1 flex flex-wrap md:-m-2">
      <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="oreo"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={oreo} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="sprinkle"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={sprinkle} />
        </div>
        <div class="w-full p-1 md:p-2">
          <img
            alt="carrot"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={carrot} />
        </div>
      </div>
      <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="carrot2"
            class="block h-full w-full rounded-lg object-cover object-center"
            src={carrot2} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Gallery