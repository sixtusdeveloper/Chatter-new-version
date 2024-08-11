'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '@/data';
import { createPost } from '@/utils/api';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";


const CreatePost = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0].id);
  const [description, setDescription] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [avatarName, setAvatarName] = useState<string | null>(null);
  const [thumbnailName, setThumbnailName] = useState<string | null>(null);
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('');

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarName(file.name);
    }
  };

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
        avatarName,
        thumbnailName,
        organization,
        role,
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
    setAvatarName(null);
    setThumbnailName(null);
    setOrganization('');
    setRole('');
  };

  return (
    <>
      <SignedIn>
        <section className="min-h-screen bg-black-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="font-bold text-center text-[2.5rem] tracking-wider text-white sm:text-[2.7rem] mb-10">
              Create <span className="text-purple">Post</span>
            </h2>
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg max-w-2xl mx-auto">
              <div className="mb-6">
                <label htmlFor="title" className="block text-white mb-2">Post Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="category" className="block text-white mb-2">Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(Number(e.target.value))}
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6 flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="organization" className="block text-white mb-2">Organization</label>
                  <input
                    id="organization"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full p-3 rounded-md bg-gray-800 text-white"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="role" className="block text-white mb-2">Role</label>
                  <input
                    id="role"
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-3 rounded-md bg-gray-800 text-white"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="description" className="block text-white mb-2">Post Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                  rows={4}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="avatar" className="block text-white mb-2">Post Avatar</label>
                <input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="thumbnail" className="block text-white mb-2">Post Thumbnail</label>
                <input
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailUpload}
                  className="w-full p-3 rounded-md bg-gray-800 text-white"
                />
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
                  Save Post
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

