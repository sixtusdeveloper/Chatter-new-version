'use client';
// components/FAQ.tsx
import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "What is Chatter?",
        answer: "Chatter is a multi-functional platform for authors and readers to create and access text-based content. It provides a rich text editor for creating and publishing content, supports Markdown for authoring, and offers social features like commenting and liking. Chatter aims to be a heaven for traditional bookworms, challenging platforms like Hashnode and Medium."
    },
    {
        question: "How do I create an account on Chatter?",
        answer: "To create an account on Chatter, you can sign up using your email address or your social media accounts like Facebook or Google. The registration process is straightforward and ensures that you can start creating or accessing content quickly."
    },
    {
        question: "What features does Chatter offer for content creation?",
        answer: "Chatter provides a rich text editor that allows users to create and publish content easily. Users can write blog posts or any other content, and enhance their posts by adding images or videos. Content is authored in Markdown and displayed as HTML when viewed."
    },
    {
        question: "How does Chatter help users discover new content?",
        answer: "Chatter offers a personalized feed based on the user's interests and reading history, making it easier to discover new content. Users can also browse, search, and filter for other users' content, and explore different categories and tags to find content that interests them."
    },
    {
        question: "What social features are available on Chatter?",
        answer: "Chatter includes social features such as commenting and liking, allowing users to interact with each other and engage in discussions. These features help create a community where users can share their thoughts and feedback on various posts."
    },
    {
        question: "How can I track the performance of my content on Chatter?",
        answer: "Chatter provides detailed analytics for users to track the performance of their content. Users can see metrics such as the number of views, likes, comments, and bookmarks their content has received. This helps users understand how their content is performing and engaging with the audience."
    },
    {
        question: "Is form validation supported on Chatter?",
        answer: "Yes, form validation is an essential feature of Chatter. It ensures that users provide the necessary information accurately when creating an account or submitting content, enhancing the overall user experience and data integrity."
    },
    {
        question: "What technologies does Chatter use for scalability and SEO?",
        answer: "Chatter is built using scalable code with proper linting and formatting tools like Prettier and ESLint. It uses TypeScript with either Vue.js or React, ensuring the necessary SEO optimizations. The backend can be powered by Firebase, Hasura, or any other suitable technology for storing user data and handling authentication."
    },
    {
        question: "Is Chatter free to use?",
        answer: "Yes, Chatter is completely free to use. You can create an account, access content, and use all the features without any cost. Start exploring and sharing your content with the community right away."
    },
    {
        question: "Does Chatter support writing content with Markdown?",
        answer: "Yes, Chatter supports writing content with Markdown. This feature allows users to create and format their content easily, which is then displayed as HTML when viewed. It enhances the content creation experience by providing a simple and flexible way to format text."
    }
];

const FAQ: React.FC = () => {
    const [visibleItems, setVisibleItems] = useState(4);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleViewMore = () => {
        if (visibleItems < faqItems.length) {
            setVisibleItems(prevVisibleItems => Math.min(prevVisibleItems + 2, faqItems.length));
        } else {
            setVisibleItems(4);
        }
    };

    return (
        <div className="container mx-auto p-8" id="FAQ">
            <h1 className="text-[2.7rem] font-bold text-center mb-12 mt-1 sm:mt-16 tracking-wide text-white">
                Frequently <span className="text-purple">Asked Questions</span>
            </h1>
            <div className="mx-auto w-full max-w-4xl space-y-4 bg-transparent">
                {faqItems.slice(0, visibleItems).map((item, index) => (
                    <div key={index} className="bg-transparent rounded shadow-md border-b border-gray-800">
                        <button 
                            className="w-full text-left flex justify-between items-center p-4 rounded focus:outline-none" 
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-md font-medium text-white-100">{item.question}</span>
                            <svg 
                                className={`w-6 h-6 transform transition-transform text-gray-400 ${expandedIndex === index ? 'rotate-180' : ''}`} 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`collapsible-content mt-2 text-white-200 ${expandedIndex === index ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
                            <p className="p-2 rounded">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center text-center mt-4 md:mt-12">
                <button 
                    onClick={handleViewMore} 
                    className="bg-purple-500 text-white text-md py-2 px-4 rounded focus:outline-none ring-1 flex items-center gap-2"
                >
                    {visibleItems < faqItems.length ? (
                        <>
                            View More
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </>
                    ) : (
                        <>
                            View Less
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 15l-7-7-7 7"></path>
                            </svg>
                        </>
                    )}
                </button>
            </div>

        </div>
    );
};

export default FAQ;





