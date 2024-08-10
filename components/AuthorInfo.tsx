import { Author } from '@/types'; // Adjust the import path as needed
import Image from 'next/image';

const AuthorInfo = ({ author }: { author: Author }) => (
  <div className="my-8 flex items-center">
    <Image src={author.imageUrl} alt={author.name} width={48} height={48} className="rounded-full" />
    <div className="ml-4">
      <p className="text-sm font-semibold text-white">{author.name}</p>
      <span className='flex text-center py-1'>
        <p className="text-xs text-gray-200 mr-2">{author.role}</p>
        <p className="text-xs text-gray-300">({author.organization})</p>
      </span>
      <span className='flex text-center'>
        <p className="text-xs text-gray-500 mr-2">{author.date}</p>
        <p className="text-xs text-gray-500">{author.datetime}</p>
      </span>
    </div>
  </div>
);


export default AuthorInfo;


// components/AuthorInfo.ts
// import Image from 'next/image';
// import { format, parseISO } from 'date-fns';

// import { Author } from '../types'; // Assuming you have a types file with the Author type defined

// const AuthorInfo = ({ author }: { author: Author }) => (
//   <div className="my-8 flex items-center">
//     <Image src={author.imageUrl} alt={author.name} width={48} height={48} className="rounded-full" />
//     <div className="ml-4">
//       <p className="text-sm font-semibold text-white">{author.name}</p>
//       <span className='flex text-center py-1'>
//         <p className="text-xs text-gray-200 mr-2">{author.role}</p>
//         <p className="text-xs text-gray-300">({author.organization})</p>
//       </span>
//       <span className='flex text-center'>
//         <p className="text-xs text-gray-500 mr-2">{format(parseISO(author.date), 'PP')}</p>
//         <p className="text-xs text-gray-500">{format(parseISO(author.datetime), 'p')}</p>
//       </span>
//     </div>
//   </div>
// );

// export default AuthorInfo;
