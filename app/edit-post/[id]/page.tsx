'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '@/data';
import { fetchPostById, updatePost } from '@/utils/api'; // Implement these functions

const EditPost = ({ postId }: { postId: string }) => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<number>(categories[0].id);
  const [description, setDescription] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [avatarName, setAvatarName] = useState<string | null>(null);
  const [thumbnailName, setThumbnailName] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const post = await fetchPostById(postId); // Fetch the post data
        setTitle(post.title);
        setCategory(post.category);
        setDescription(post.description);
        setOrganization(post.organization);
        setRole(post.role);
        setIsFeatured(post.isFeatured);
        setAvatarName(post.avatarName);
        setThumbnailName(post.thumbnailName);
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
        organization,
        role,
        isFeatured,
        avatarName,
        thumbnailName,
      };
      await updatePost(postId, updatedPost); // Send updated data to your backend
      router.push('/'); // Redirect after updating the post
    } catch (error) {
      console.error('Failed to update post', error);
    }
  };

  return (
    <section className="min-h-screen bg-black-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-bold text-center text-[2.5rem] tracking-wider text-white sm:text-[2.7rem] mb-10">
          Edit <span className="text-purple">Post</span>
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
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                    setAvatarName(file.name);
                    }
                }}
                className="w-full p-3 rounded-md bg-gray-800 text-white"
                />
                {avatarName && (
                <div className="mt-2 text-white">
                    <span>Selected Avatar: {avatarName}</span>
                </div>
                )}
            </div>

            <div className="mb-6">
                <label htmlFor="thumbnail" className="block text-white mb-2">Post Thumbnail</label>
                <input
                id="thumbnail"
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                    setThumbnailName(file.name);
                    }
                }}
                className="w-full p-3 rounded-md bg-gray-800 text-white"
                />
                {thumbnailName && (
                <div className="mt-2 text-white">
                    <span>Selected Thumbnail: {thumbnailName}</span>
                </div>
                )}
            </div>

            <div className="mb-6 flex items-center">
                <input
                id="featured"
                type="checkbox"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="mr-2"
                />
                <label htmlFor="featured" className="text-white">Mark as Featured</label>
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
  );
};

export default EditPost;
