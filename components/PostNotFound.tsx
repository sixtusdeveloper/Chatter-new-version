import React from "react";
import Image from "next/image";

const PostNotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen mt-0 lg:mt-0">
      <div className="text-center">
        <Image
          src="/not-found.png" // Replace with your not found image path
          alt="User not found"
          width={200}
          height={200}
          className="mx-auto"
        />
        <p className="text-white-100 text-lg lg:text-xl mt-4 tracking-wider font-bold">
          Post not found
        </p>
      </div>
    </div>
  );
};

export default PostNotFound;
