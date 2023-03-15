import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion';
import { menuData } from '../menuData';
import {CiLollipop} from 'react-icons/ci'



const Menu = () => {

const { title, subtitle, menuItems } = menuData;

  return (
    <section className=' bg-[#FFFBF7] text-[#2B2B2B] p-8'>
      {/* background */}
      <div className='w-full'></div>
      {/* text */}
      <div>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='container mx-auto flex flex-col items-center text-center justify-center'
        >
          <motion.h2
            variants={fadeIn('down', 'tween', 0.2, 1.6)}
            className='capitalize text-center text-[36px] font-bold'
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.6)}
            className='capitalize mb-8'
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
      {/* menu gallery */}
      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          delay: 0.2,
          duration: 1.6,
          ease: 'easeOut',
        }}
        className=''
      >
        <div className='container mx-auto flex justify-center'>
          <div className='mb-8 md:mb-4 xl:mb-16'>
            {/* grid */}
            <div className=''>
              {menuItems.map((item, index) => {
                // destructure item
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    <div className='flex h-full'>
                      {/* image */}
                      {/* reverse order for the first image and the last one */}
                      <div
                        className={`w-auto ${
                          index === 1 || index === 3
                            ? 'order-1'
                            : 'order-none'
                        } `}
                      >
                        <img src={image} alt={name} className='w-56 h-56 md:w-72 md:h-72 rounded-lg'/>
                      </div>
                      {/* text */}
                      <div className='bg-white flex flex-col justify-center md:p-6 w-[51%]'>
                        <div className='text-center flex-col'>
                          <div className='text-l font-semibold text-dark xl:text-2xl'>
                            {name}
                          </div>
                          <div className='my-1 text-[24px] lg:text-[40px] lg:my-6 text-accent font-semibold'>
                            {price}
                          </div>
                          <div className='px-4 text-[11px]'>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

<div className='flex justify-center'>
      <button className='bg-gradient-to-r from-purple-300 to-[#F40076] font-semibold text-white 
          rounded-lg mb-10 p-3 shadow-lg hover:scale-[110%] duration-200 mt-6'>
            <span className='flex items-center'>
                <h1>LET'S POP </h1>
                <CiLollipop className='hover:rotate-180 duration-300 text-[22px]'/>
              </span> 
          </button>  
</div>
      </motion.div>
    </section>
  )
}

export default Menu

        {/* <ul>
            <li>"Red Velvet Rascal": A mischievous little cake pop with 
                a creamy center and a coat of smooth, rich white chocolate.
            </li>
            <li>"Chocolate Thunder": A powerful and decadent cake pop with a 
                deep cocoa flavor, coated in dark chocolate and topped with a 
                sprinkle of cocoa powder.
            </li>
            <li>"Vanilla Dreamer": A dreamy and creamy vanilla cake pop, coated
                 in a smooth white chocolate shell and decorated with pastel 
                 sprinkles.
            </li>
            <li>"Luscious Lemonade": A zesty and refreshing lemon cake pop, 
                coated in a tangy lemon candy shell and garnished with a 
                slice of candied lemon.
            </li>
            <li>"Strawberry Swirl": A whimsical and colorful cake pop with 
                a swirl of fresh strawberry puree in the cake batter, coated 
                in a pink and white candy shell and topped with a sprinkle 
                of pink sugar.
            </li>
            <li>"Confetti Craze": A party in a cake pop! This funfetti 
                cake pop is filled with colorful sprinkles and coated 
                in a rainbow of candy shells.
            </li>
            <li>"Carrot Cake Crusader": A cake pop with a mission - 
                to satisfy your sweet tooth with a delicious blend of 
                moist carrot cake and creamy cream cheese frosting, 
                coated in a velvety white chocolate shell.
            </li>
            <li>"Cookies 'n Cream Crush": A cake pop that's sure to 
                crush your cravings! This chocolatey cake pop is 
                made with crushed Oreo cookies and coated in a 
                smooth, creamy white chocolate shell.
            </li>
            <li>"Pumpkin Spice Pixie": A mischievous little cake 
                pop with a pumpkin spice twist, coated in a warm 
                and comforting cinnamon candy shell.
            </li>
            <li>"Salty Caramel Surprise": A sweet and salty cake 
                pop with a surprise filling of gooey caramel, coated 
                in a rich and creamy chocolate shell and topped with 
                a sprinkle of sea salt.
            </li>
        </ul> */}