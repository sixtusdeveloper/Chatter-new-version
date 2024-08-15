'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '@/data';
import { Spotlight } from '@/components/ui/Spotlight';
import { fetchPostById, updatePost } from '@/utils/api'; // Implement these functions
import { useUser } from '@clerk/nextjs';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const EditProfile = ({ postId }: { postId: string }) => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [biography, setBiography] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [organization, setOrganization] = useState('');
  const [position, setPosition] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      try {
        setFirstName('');
        setLastName('');
        setBiography('');
        setProfileImage(null);
        setOrganization('');
        setPosition('');
        setFacebookLink('');
        setTwitterLink('');
        setLinkedinLink('');
        
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
        firstname,
        lastname,
        biography,
        profileImage,
        organization,
        position,
        facebookLink,
        twitterLink,
        linkedinLink,
      };
      await updatePost(postId, updatedPost); // Send updated data to your backend
      router.push('/'); // Redirect after updating the post
    } catch (error) {
      console.error('Failed to update post', error);
    }
  };

  function handleAvatarUpload(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  function handleThumbnailUpload(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <SignedIn>
        <section className="min-h-screen bg-black-100 py-16 overflow-x-hidden">
          <div className='relative'>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
          </div>

          <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
          <div className="container mx-auto px-0 lg:px-6 z-10 relative overflow-x-hidden">
            <h2 className="font-bold text-center text-[2.5rem] tracking-wider text-white sm:text-[2.7rem] mb-10">
              Edit<span className="text-purple">&nbsp;Profile</span>
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
            <p className='text-center text-[1rem] p-8 font-semibold tracking-wide'>Find below your Profile details, you've control over it!</p>
            <form onSubmit={handleSubmit} className="bg-gray-900 p-4 lg:p-8 rounded-lg max-w-2xl mx-auto overflow-x-hidden">
                <div className="mb-6 flex space-x-4">
                    <div className="w-1/2">
                        <label htmlFor="firstname" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">First name</label>
                        <input
                            id="firstname"
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full p-2 lg:p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="lastname" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Last name</label>
                        <input
                            id="lastname"
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full p-2 lg:p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                            required
                        />
                    </div>
                </div> 
            
                <div className="mb-6 flex space-x-4">
                    <div className="w-1/2">
                        <label htmlFor="organization" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Organization</label>
                        <input
                            id="organization"
                            type="text"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            className="w-full p-2 lg:p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="role" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Position</label>
                        <input
                            id="position"
                            type="text"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="w-full p-2 lg:p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="biography" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Perosonal Biography</label>
                    <textarea
                    id="biography"
                    value={biography}
                    onChange={(e) => setBiography(e.target.value)}
                    className="w-full p-2 lg:p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                    rows={4}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="facebook" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Facebook Link</label>
                    <input
                    id="facebook"
                    type="url"
                    value={facebookLink}
                    onChange={(e) => setFacebookLink(e.target.value)}
                    className="w-full p-2 lg:p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                />
                </div>
                <div className="mb-6">
                    <label htmlFor="twitter" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Twitter Link</label>
                    <input
                    id="twitter"
                    type="url"
                    value={twitterLink}
                    onChange={(e) => setTwitterLink(e.target.value)}
                    className="w-full p-2 lg:p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                />
                </div>
                <div className="mb-6">
                    <label htmlFor="linkedin" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">LinkedIn Link</label>
                    <input
                    id="linkedin"
                    type="url"
                    value={linkedinLink}
                    onChange={(e) => setLinkedinLink(e.target.value)}
                    className="w-full p-2 lg:p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                />
                </div>
                <div className="mb-6">
                    <label htmlFor="avatar" className="block text-gray-200 text-[0.88rem] tracking-wide mb-2">Profile image</label>
                    <input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="w-full p-2 lg:p-3 rounded-md bg-gray-800 text-gray-100 text-[0.88rem] tracking-wide border border-gray-800"
                    />
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

export default EditProfile;
