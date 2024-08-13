'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '@/data';
import { Spotlight } from '@/components/ui/Spotlight';
import { fetchPostById, updatePost } from '@/utils/api'; // Implement these functions
import { useUser } from '@clerk/nextjs';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const EditPost = ({ postId }: { postId: string }) => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

 
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0].id);
  const [description, setDescription] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [avatarName, setAvatarName] = useState<string | null>(null);
  const [thumbnailName, setThumbnailName] = useState<string | null>(null);
  const [organization, setOrganization] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      try {
        setTitle('');
        setCategory(categories[0].id);
        setDescription('');
        setIsFeatured(false);
        setThumbnailName(null);
        setOrganization('');
        setPosition('');
        
      } catch (error) {
        console.error('Failed to load post', error);
      }
    };
    loadPost();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedPost = {
        title,
        category,
        description,
        isFeatured,
        thumbnailName,
        organization,
        position,
      };
      await updatePost(postId, updatedPost); // Send updated data to your backend
      router.push('/'); // Redirect after updating the post
    } catch (error) {
      console.error('Failed to update post', error);
    }
  };

  function handleThumbnailUpload(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

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
              Edit<span className="text-purple">&nbp;Post</span>
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
            <p className='text-center text-[1rem] p-8 font-semibold tracking-wide'>Find below your Post details, you've control over it!</p>
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

              <div className="flex justify-end space-x-4">
                <button
                type="button"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                onClick={() => router.push('/')}
                >
                Cancel
                </button>
                <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                >
                Save Changes
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

export default EditPost;
