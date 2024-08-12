"use client";

import React, { useState } from "react";
import { Author, Admin } from "@/types"; 
import Image from "next/image";
import Link from "next/link";
import UserNotFound from "@/components/UserNotFound";
import usersData from "@/data/userData";

const UsersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterRole, setFilterRole] = useState<"all" | "author" | "admin">("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(6); // Adjust the number of users per page as needed
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const filteredUsers = usersData.filter((user) => {
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.organization.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesRole && matchesSearch;
  });

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

      {currentUsers.length > 0 ? (
        <div className="flex-grow grid grid-cols-1 py-[2.2rem] sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUsers.map((user) => (
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-lg ${
                currentPage === index + 1 ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
