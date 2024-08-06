// components/MorePostsSection.tsx
import React from 'react';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

const MorePostsSection = () => {
  const morePosts = [/* Array of more posts */];

  return (
    <section className="bg-black-200 py-12">
      <div className="container mx-auto px-6">
        
        <div className="space-y-6">
          {morePosts.map(post => (
            <div key={post.id} className="bg-gray-50 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
              <a href={`/posts/${post.id}`} className="text-blue-500 mt-4 block">Read more</a>
            </div>
          ))}
        </div>
        <div className="flex md:w-full relative flex-col justify-center items-center mt-4 md:mt-12">
          <Link href="/blog" legacyBehavior>
            <a rel="noopener noreferrer" className="bg-purple-500 text-purple text-md py-2 px-4 rounded flex items-center justify-center gap-2 hover:bg-purple-600">
              View More <GoArrowRight className="text-purple forced-colors:purple text-lg" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MorePostsSection;
