import React from 'react'
import oreo from '../assets/oreo.jpg'
import carrot from '../assets/carrot.jpg'
import carrot2 from '../assets/carrot2.jpg'
import sprinkle from '../assets/sprinkle.jpg'


const Gallery = () => {
  return (
    <div>
        <div className='grid grid-cols-2 px-5 w-full h-screen bg-pink-400'>

        <img src={oreo} alt='oreo' className='w-[400px] h-[400px]'/>
        <img src={carrot} alt='carrot' className='w-[400px] h-[400px]' />
        <img src={carrot2} alt='carrot2' className='w-[400px] h-[400px]' />
        <img src={sprinkle} alt='sprinkle' className='w-[400px] h-[400px]' />
        </div>
    </div>
  )
}

export default Gallery