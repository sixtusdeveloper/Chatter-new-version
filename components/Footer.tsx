'use client';

import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic email format validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    if (!email) {
      setError('Please enter your email address.');
      return;
    } else if (!isValidEmail) {
      setError('Please enter a valid email address.');
      return;
    }

    // Reset error and success message
    setError('');
    setSuccessMessage('Subscribing...');

    // Simulate submitting the form (replace with actual submission logic)
    setTimeout(() => {
      setSuccessMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear success message after 3 seconds
    }, 2000); // Example: 2 seconds delay, replace with actual API call or logic
  };

  return (
    <footer className="bg-black-200 text-white pt-10 mt-10 md:mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Chatter</h3>
            <p className="text-white-100 text-md">
              Chatter is a modern communication platform designed to streamline interactions and enhance collaboration with intuitive features and a user-friendly interface.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form className="flex items-center" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="py-2 px-4 mr-2 ring-1 bg-black-100 text-white-100 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            {successMessage && <p className="text-green-500 text-sm mt-1">{successMessage}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8"> 
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
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
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-white-100 text-md">
              Email: contact@chatterapp.com<br />
              Phone: +1234567890
            </p>
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
