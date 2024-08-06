'use client';

import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {

  return (
    <footer className="bg-black-100 text-white pt-10 border-t border-gray-800">
        <div className="flex flex-col items-center mt-8"> 
            <div>
                <h3 className="text-xl font-bold mb-4 text-center">Follow Us</h3>
                <div className="flex space-x-4 pb-4">
                <a href="https://github.com/sixtusdeveloper" target="_blank" rel="noopener noreferrer" className="text-purple sm:text-[15px] hover:text-blue-200">
                    <FaGithub className="text-2xl" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple hover:text-blue-200">
                    <FaTwitter className="text-2xl" />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple hover:text-blue-200">
                    <FaInstagram className="text-2xl" />
                </a>
                <a href="https://linkedin.com/in/sixtusushrey" target="_blank" rel="noopener noreferrer" className="text-purple hover:text-blue-200">
                    <FaLinkedin className="text-2xl" />
                </a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple hover:text-blue-200">
                    <FaFacebook className="text-2xl" />
                </a>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center border-t py-4 mt-2 md:mt-6'>
            <span className='w-full flex flex-col text-center text-white-100 text-sm p-2 tracking-wider'>
            Copyright&copy; 2024. developed by Sixtusdev | all rights reserved | terms & conditions.
            </span>
        </div>
    </footer>
  );
};

export default Footer;
