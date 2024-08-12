'use client';

import React, { useState } from "react";
import { Author, Admin } from "@/types"; 
import Image from "next/image";
import Link from "next/link";
import UserNotFound from "@/components/UserNotFound";

const users: (Author | Admin)[] = [
  {
    id: 1,
    name: "Michael Benjamin",
    role: "author",
    position: "Co-Founder / CTO",
    organization: "ElitesDev Ltd",
    href: "/authors/michael-foster",
    imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/profile.svg",
    canCreatePost: true,
    canLike: true,
    date: "2024-08-11",
    datetime: "2024-08-11T08:00:00Z",
  },
  {
    id: 2,
    name: "Sandra Ankana",
    role: "admin",
    position: "Lead Designer",
    organization: "Pinace Ltd",
    href: "/authors/sandra-ankana",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VxfHx8fHx8fHwxNjkxNTA3MzU4&ixlib=rb-1.2.1&q=80&w=1080",
    fallbackImageUrl: "/socials01.jpg",
    canCreatePost: true,
    canLike: true,
    canComment: true,
    canFeaturePost: true,
    canViewCommenters: true,
    date: "2024-08-11",
    datetime: "2024-08-11T08:00:00Z",
  },
  {
    id: 3,
    name: "Anita Johnson",
    role: "admin",
    position: "Cloud Engineer",
    organization: "Pinace Ltd",
    href: "/authors/sandra-ankana",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxyYW5kb218fHx8fHx8fHwxNjYxMzM3MDUw&ixlib=rb-1.2.1&q=80&w=400",
    fallbackImageUrl: "/socials01.jpg",
    canCreatePost: true,
    canLike: true,
    canComment: true,
    canFeaturePost: true,
    canViewCommenters: true,
    date: "2024-08-11",
    datetime: "2024-08-11T08:00:00Z",
  },
];

const UsersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterRole, setFilterRole] = useState<"all" | "author" | "admin">("all");
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const filteredUsers = users.filter((user) => {
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.organization.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesRole && matchesSearch;
  });

  return (
    <div className="container mx-auto lg:px-10 px-8 py-8 bg-black-200 min-h-screen flex flex-col">
      <h1 className="text-center text-[2.6rem] font-bold tracking-wider text-white sm:text-[2.8rem]">
        Our <span className="text-purple">Users</span>
      </h1>

      <p className="text-center mt-8 text-md text-gray-200 p-2">
        Search Users by their <span className="text-gray-300">names, roles, organizations, and positions</span> 👇
      </p>

      <div className="flex justify-center py-[1rem] mb-8">
        <input
          type="text"
          placeholder="Search by name, position, or organization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 px-4 rounded-lg w-full max-w-md bg-transparent border-gray-700"
        />
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value as "all" | "author" | "admin")}
          className="border text-gray-200 p-2 rounded-lg ml-4 bg-transparent border-gray-700"
        >
          <option className="bg-blue-600" value="all">All Roles</option>
          <option className="bg-blue-600" value="author">Authors</option>
          <option className="bg-blue-600" value="admin">Admins</option>
        </select>
      </div>

      {filteredUsers.length > 0 ? (
        <div className="flex-grow grid grid-cols-1 py-[2.2rem] sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div key={user.id} className="relative border border-gray-800 rounded-lg p-4 shadow-md bg-black-200">
              <div className="absolute top-4 right-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    user.role === "author" ? "bg-blue-600 text-white text-[0.77rem] tracking-wide" : "bg-green-600 text-[0.77rem] text-white tracking-wide"
                  }`}
                >
                  {user.role.toUpperCase()}
                </span>
              </div>
              <Image
                src={imageError[user.id] ? user.fallbackImageUrl : user.imageUrl}
                alt={user.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
                style={{ objectFit: "cover", width: "150px", height: "150px" }}
                onError={() => handleImageError(user.id)}
              />
              <h2 className="text-[1rem] font-semibold tracking-wide text-white-100 text-center">{user.name}</h2>
              <p className="text-gray-400 text-[0.85rem] lg:text-md text-center">{user.position}</p>
              <p className="text-gray-400 text-md text-[0.72rem] text-center mb-2">{user.organization}</p>
              <Link href='/pages/users-profile' legacyBehavior className="my-2 py-4">
                <a className="block text-center text-purple hover:text-green-600 text-[0.82rem] font-semibold hover:no-underline">
                  View Profile
                </a>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <UserNotFound />
        </div>
      )}
    </div>
  );
};

export default UsersPage;



