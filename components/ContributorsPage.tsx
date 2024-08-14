// pages/ContributorsPage.tsx
import React, { useState } from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { FaStar } from 'react-icons/fa';

const ContributorsPage: React.FC = () => {
    const [contributorName, setContributorName] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0);

    const handleRatingClick = (index: number) => {
        setRating(index + 1);
    };

    // Hange submit contribution
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contributors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: contributorName,
                    message: message,
                    rating: rating,
                }),
            });

            if (response.ok) {
                alert('Thank you for your contribution!');
                // Optionally, you can reset the form fields after successful submission
                setContributorName('');
                setMessage('');
                setRating(0);
            } else {
                alert('Failed to submit your contribution. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting contribution:', error);
            alert('An error occurred. Please try again later.');
        }
    };



    return (
        <div className="relative bg-gray-900 text-white min-h-screen flex justify-center items-center">
            <Spotlight className="top-20 left-10 h-[80vh] w-[60vw]" fill="purple" />
            <Spotlight className="-top-20 -right-20 h-screen w-[60vw]" fill="blue" />

            <div className="relative max-w-2xl mx-auto px-6 py-12 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center tracking-wide mb-6">
                    Share Your <span className='text-purple'>Experience</span>
                </h1>
                <p className="text-sm tracking-wide px-6 text-gray-200 text-center mb-8">
                    We value your feedback! Please share your thoughts and rate your experience with Chatter. Ensure to tick the stars you feel we deserve.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 px-4 lg:px-10">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-semibold tracking-wide text-gray-200 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="p-3 bg-transparent rounded-lg border border-gray-700 tracking-wide outline-none focus:ring-1 focus:ring-blue-400"
                            value={contributorName}
                            onChange={(e) => setContributorName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold tracking-wide text-gray-200 mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            className="p-3 bg-transparent rounded-lg border border-gray-700 tracking-wide text-white outline-none focus:ring-1 focus:ring-blue-400"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your thoughts..."
                            rows={5}
                            required
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <label className="text-sm text-gray-100 font-semibold tracking-wide mb-6">
                            Rate Your Experience
                        </label>
                        <div className="flex space-x-4">
                            {Array.from({ length: 5 }, (_, index) => (
                                <FaStar
                                    key={index}
                                    size={20}
                                    onClick={() => handleRatingClick(index)}
                                    className={`cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 rounded-md text-white font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Contribute
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContributorsPage;
