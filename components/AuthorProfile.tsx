// src/pages/AuthorProfile.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { Post } from '@/types'; // Adjust the import path based on your project structure
import SocialIcons from '@/components/SocialIcons';
import { Author } from '@/types'; // Adjust the import path based on your project structure
import Link from 'next/link';

interface AuthorProfileProps {
  author: Author;
  posts: Post[];
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({ author, posts }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col items-center md:flex-row md:items-start">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Image
            src={author.imageUrl}
            alt={author.name}
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <SocialIcons category={author.role} />
        </div>
        <div className="md:ml-6 md:w-2/3">
          <h1 className="text-3xl font-bold text-white">{author.name}</h1>
          <p className="mt-2 text-gray-400">{author.role} at {author.organization}</p>
          <p className="mt-4 text-gray-300">
            Welcome to {author.name}'s profile page. Here you can find all the posts authored by {author.name}.
          </p>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Posts by {author.name}</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={post.href}>
              <div className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-all duration-200">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="object-cover rounded-lg"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">{post.title}</h3>
                <p className="mt-2 text-gray-400">{post.description}</p>
                <p className="mt-2 text-gray-500 text-sm">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
