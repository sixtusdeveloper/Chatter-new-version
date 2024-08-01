import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Testimonials = () => {
  return (
    <div className="pb-20" id="Testimonials">
      <h1 className='text-center font-bold tracking-wide text-[2.7rem]'>
      What <span className="text-purple">USers</span> Say <span className="text-purple">About Us</span>
      </h1>
      <div className='flex flex-col mt-10 items-center max-lg:mt-16'>
        <InfiniteMovingCards 
        items={testimonials}
        direction='right'
        speed='slow'
        />    
      </div>
    </div>
  );
};

export default Testimonials



