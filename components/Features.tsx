import { features} from '@/data';
import React from 'react';
import { Button } from './ui/MovingBorder';
import Image from 'next/image';

const Features = () => {
  return (
      <div className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-8 pb-20" id="Features">
        <h1 className="text-white font-bold text-center text-[2.7rem] leading-snug tracking-wide">Explore <span className="text-purple">Chatter Features</span></h1>

         <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {features.map((card) => (
               <Button
               key={card.id}
               borderRadius='1.75rem'
               duration={Math.floor(Math.random() *10000) + 10000}
               className='flex-1 text-white border-neutral-200 dark:border-slate-800'
               >
                  <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                  <Image src={card.thumbnail} alt={card.thumbnail} width={250} height={250} className='lg:w-32 md:w-20 w-16'/>
                  <div className='lg:ms-5'>
                     <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                     <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                  </div>
                  </div>
               </Button>
            ))}
         </div>
      </div>
  )
}

export default Features;
