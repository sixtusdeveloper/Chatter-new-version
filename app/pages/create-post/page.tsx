'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '@/data';
import { createPost } from '@/utils/api';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { Spotlight } from '@/components/ui/Spotlight';
import { useUser } from '@clerk/nextjs';

const CreatePost = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0].id);
  const [description, setDescription] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [thumbnailName, setThumbnailName] = useState<string | null>(null);

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newPost = {
        title,
        category,
        description,
        isFeatured,
        thumbnailName,
      };
      await createPost(newPost);
      router.push('/');
    } catch (error) {
      console.error('Failed to create post', error);
    }
  };

  const handleReset = () => {
    setTitle('');
    setCategory(categories[0].id);
    setDescription('');
    setIsFeatured(false);
    setThumbnailName(null);
  };

  return (
    <>
      <SignedIn>
        <section className="min-h-screen bg-black-100 py-16">
          <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
          </div>

          <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
          <div className="container mx-auto px-6 z-10 relative">
            <h2 className="font-bold text-center text-[2.5rem] tracking-wider text-white sm:text-[2.7rem] mb-10">
              Create<span className="text-purple">&nbsp;Post</span>
            </h2>
            <h3 className='text-[1.2rem] font-bold tracking-wider text-white text-center sm:text-[1.8rem]'>
              {isSignedIn && user ? (
                <>
                  👋 Hey <span className='text-purple'>{user.firstName}</span>
                </>
              ) : (
                '👋 Hey there!'
              )}
            </h3>
            <p className='text-center text-[1rem] p-8 font-semibold tracking-wide'>Fill out all the available input fields below to effectively create your post!</p>
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg max-w-2xl mx-auto">
              <div className="mb-6">
                <label htmlFor="title" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Post title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="category" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Post category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(Number(e.target.value))}
                  className="w-full p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Post description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                  rows={4}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="thumbnail" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Post image</label>
                <input
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailUpload}
                  className="w-full p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                />
              </div>
              <div className="mb-6 flex items-center space-x-2">
                <input
                  id="isFeatured"
                  type="checkbox"
                  checked={isFeatured}
                  onChange={() => setIsFeatured(!isFeatured)}
                  className="w-5 h-5 text-purple-600 border-gray-800 rounded"
                />
                <label htmlFor="isFeatured" className="text-gray-200 text-[0.88rem]">Featured Post</label>
              </div>
              <div className="flex justify-between items-center space-x-4">
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                    onClick={() => router.push('/')}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                >
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </section>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default CreatePost;







