'use client';

import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {

  return (
    <footer className="bg-black-200 text-white border-t border-gray-800">
        
        <div className='flex justify-center items-center py-4 mt-2 md:mt-6'>
            <span className='w-full flex flex-col text-center text-white-100 text-sm p-2 tracking-wider'>
            Copyright&copy; 2024. developed by Sixtusdev | all rights reserved | terms & conditions.
            </span>
        </div>
    </footer>
  );
};

export default Footer;
