import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPinterest} from 'react-icons/bs'
import {SiEtsy} from 'react-icons/si'
import {motion} from 'framer-motion'




const Social = () => {
  return (
    <section className=' bg-[#F40076]'>
     <motion.div 
     className='flex justify-between py-6 items-center 
     mx-24 text-[24px] text-white'
     

>
        <AiOutlineInstagram className='hover:text-purple-300'/>
        <HiOutlineMail className='hover:text-purple-300'/>
        <BsPinterest className='hover:text-purple-300'/>
        <SiEtsy className='hover:text-purple-300'/>
    </motion.div>
    </section>
  )
}

export default Social