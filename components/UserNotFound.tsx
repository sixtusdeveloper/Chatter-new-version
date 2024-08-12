import React from "react";
import Image from "next/image";

const UserNotFound: React.FC = () => {
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
          User not found
        </p>
      </div>
    </div>
  );
};

export default UserNotFound;










// import React from "react";
// import Image from "next/image";

// const UserNotFound: React.FC = () => {
//   return (
//     <div className="text-center py-6 lg:py-8 mt-8">
//       <Image
//         src="/not-found.png" // Replace with your not found image path
//         alt="User not found"
//         width={200}
//         height={200}
//         className="mx-auto"
//       />
//       <p className="text-white-100 text-lg lg:text-xl mt-4 tracking-wide font-bold">User not found</p>
//     </div>
//   );
// };

// export default UserNotFound;
