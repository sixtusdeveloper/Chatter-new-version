'use client';


// pages/CustomerStoriesPage.tsx
import MagicButton from './ui/MagicButton';
import React, { useState } from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { FaStar } from 'react-icons/fa'; // Import the star icon for ratings
import ImageWithFallback from '@/components/ImageWithFallback';
import { testimonials } from '@/data'; // Ensure this path is correct
import { Testimonial } from '@/types'; // Ensure this path is correct
import Link from 'next/link';

const CustomerStoriesPage: React.FC = () => {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const testimonialsPerPage = 6; // Number of testimonials to show per page

    // Calculate the index of the first and last testimonials for the current page
    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    // Truncate the Customer quote to a maximum length
    const MAX_CUSTOMER_QUOTE_LENGTH = 100; // Define the maximum length for the description
    const truncateCustomerQuote = (text: string, maxLength: number): string => {
        if (text.length <= maxLength) return text;
        return `${text.slice(0, maxLength)}...`;
    };

    // Change page handler
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="relative bg-gray-900 text-white lg:px-10 min-h-screen">
            <Spotlight className="-top-20 -right-20 h-screen w-[60vw]" fill="blue" />
            <Spotlight className="top-20 left-10 h-[80vh] w-[60vw]" fill="purple" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-12">
                
                <h1 className="text-center text-[2.4rem] font-bold tracking-wide text-white sm:text-[2.7rem]">
                   Our Customer <span className='text-purple'>Stories</span>
                </h1>
                <p className="relative text-md text-center mb-6 px-8 lg:p-4 mx-auto max-w-xl leading-6 tracking-wide">
                    Discover how our platform has made a difference in the lives of our users. Read their stories and see their success firsthand.
                </p>

                <div className="flex flex-col lg:flex-row justify-center items-center mb-8 lg:mb-2">
                    <Link href="/pages/contributors" legacyBehavior>
                        <a rel="noopener noreferrer">
                            <MagicButton 
                            title="Contribute" 
                            otherClasses='text-[1.3rem] flex justify-center items-center text-center'
                            />
                        </a>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mt-14 mt-6 gap-8">
                    {currentTestimonials.map((testimonial: Testimonial) => (
                        <div key={testimonial.name} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center">
                            <ImageWithFallback
                                src={testimonial.imageUrl}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full object-cover mb-4 customer-story-avatar"
                                fallbackSrc={testimonial.fallbackImageUrl}
                                width={96}
                                height={96}
                            />
                            <h3 className="text-lg text-white-100 tracking-wide font-semibold mb-2">{testimonial.name}</h3>
                            <p className="text-sm text-gray-400 mb-4">{testimonial.title}</p>
                            <p className="text-center mb-4 text-sm text-gray-200 leading-6 tracking-wide">
                                "{truncateCustomerQuote(testimonial.quote, MAX_CUSTOMER_QUOTE_LENGTH)}"
                                <a
                                    href="#"
                                    className="text-blue-400 hover:underline ml-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert(testimonial.fullQuote); // Replace with modal or detailed view if needed
                                    }}
                                >
                                    Read more
                                </a>
                            </p>
                            <div className="flex space-x-2 items-center">
                                {Array.from({ length: 6 }, (_, index) => (
                                    <FaStar
                                        key={index}
                                        size={18}
                                        className={`text-yellow-400 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination controls */}
                <div className="flex justify-center my-8 py-4 space-x-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-lg text-gray-300">
                        Page {currentPage}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={indexOfLastTestimonial >= testimonials.length}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerStoriesPage;





