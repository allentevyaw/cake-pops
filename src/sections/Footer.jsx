import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {FaTiktok} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer
    className="text-center bg-[#2B2B2B] text-neutral-200 lg:text-left">
    <div
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
        <span>Get connected with us on our socials:</span>
        </div>
        <div className="flex justify-center text-2xl">
        <a href="https://www.instagram.com/cakepopsbyandrea/" className="mr-6 :text-neutral-200 hover:text-[#F40076] hover:scale-125 duration-200">
            <AiOutlineInstagram />
        </a>
        <a href="#!" className="mr-6 text-neutral-200 hover:text-[#F40076] hover:scale-125 duration-200">
            <FaTiktok />
        </a>
        <a href="mailto:cakepopsbyandrea@yahoo.com" className="mr-6 text-neutral-200 hover:text-[#F40076] hover:scale-125 duration-200">
            <HiOutlineMail />
        </a>
        </div>
    </div>
    <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="">
            <h6
            className="mb-4 flex items-center justify-center font-semibold 
            uppercase md:justify-start text-transparent bg-clip-text 
            bg-gradient-to-l from-purple-300 to-[#F40076]">
            Cake Pops by Andrea
            </h6>
            <p>
            We're all about spreading joy and happiness through our cake pops, 
            and we can't wait to share our love for baking with you. So why not 
            treat yourself to a little happiness today? Order now and experience 
            the magic of Cake Pops by Andrea!
            </p>
        </div>
        <div>
            <h6
            className="mb-4 flex justify-center font-semibold uppercase md:justify-start
            text-transparent bg-clip-text bg-gradient-to-l from-purple-300 to-[#F40076]">
            Useful links
            </h6>
            <p className="mb-4">
            <Link to='/cake-pops' className="text-neutral-200 hover:text-[#F40076]"
                >Home</Link
            >
            </p>
            <p className="mb-4">
            <Link to='/cake-pops/menu' className="text-neutral-200 hover:text-[#F40076]"
                >Menu</Link
            >
            </p>
            <p className="">
            <Link to='/cake-pops/contact' className="text-neutral-200 hover:text-[#F40076]"
                >Contact</Link
            >
            </p>
        </div>
        <div>
            <h6
            className="mb-4 flex justify-center font-semibold uppercase md:justify-start
            text-transparent bg-clip-text bg-gradient-to-l from-purple-300 to-[#F40076]">
            Contact
            </h6>
            <p className="flex items-center justify-center md:justify-start">
            cakepopsbyandrea@yahoo.com
            </p>
        </div>
        </div>
    </div>
    <div className="p-6 text-center bg-neutral-700 text-transparent bg-clip-text 
        bg-gradient-to-l from-purple-300 to-[#F40076]">
        <span>© 2023 Copyright: </span>
        <a
        className="font-semibold text-neutral-400 hover:text-purple-300"
        href=""
        >Design by Allen Tevyaw</a
        >
    </div>
    </footer>
  )
}

export default Footer