import { Category } from '@/types'; // Adjust the import path as needed
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialIcons = ({ category }: { category: Category }) => (
    <div className="flex justify-between items-center mt-4 gap-8">
      <div className='flex space-x-4 bg-transparent rounded-full py-1 px-2 border border-gray-800'>
        <FaFacebook className="text-gray-300 hover:text-gray-200 cursor-pointer" size={20} />
        <FaTwitter className="text-gray-300 hover:text-gray-200 cursor-pointer" size={20} />
        <FaLinkedin className="text-gray-300 hover:text-gray-200 cursor-pointer" size={20} />
      </div>
      <div className='flex items-center bg-transparent py-1 px-2 rounded-full border border-gray-800'>
        <p className='text-sm text-gray-400'>{category.title}</p>
      </div>
    </div>
);

export default SocialIcons;


