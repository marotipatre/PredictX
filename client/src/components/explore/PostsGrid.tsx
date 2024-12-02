"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineCalendar, AiOutlineDollarCircle } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import { useRouter } from "next/navigation";


interface Post {
  id: number;
  imageUrl: string;
  active: boolean;  
  bets: number;     
  poolName: string;
  endDate: string;  
  totalAmount: number; 
  finalScore?: string; 
  totalRewardDistributed?: number; 
  winners?: string[];

}

interface PostsGridProps {
  posts: Post[];
  type?: string;
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts,type }) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Ensures this component only runs on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (id: number) => {
    if (isClient) {
      router.push(`/pool/${id}?type=${type}`);  // Navigate to the pool details page
    }
  };

  const socials = [
    { name: "Instagram", color: "bg-blue-600" },
    { name: "Twitter", color: "bg-blue-400" },
    { name: "Farcaster", color: "bg-pink-500" },
    { name: "YouTube", color: "bg-red" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      { posts?.length>0 &&  posts?.map((post) => (
        <div 
          key={post?.id} 
          className="relative group cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden bg-gray-900"
          onClick={() => handleClick(post?.id)} // Redirect to pool details
        >
          {/* Post Image */}
          <Image
            src={post?.imageUrl}
            alt={`Post ${post?.id}`}
            width={300}
            height={300}
            className="object-cover w-full h-48 sm:h-60 md:h-72 lg:h-80"
            style={{ transition: "all 0.3s ease-in-out" }}
          />

          {/* Active or Ended Tag */}
          <div className={`absolute top-2 right-2 px-3 py-1 rounded-lg text-xs font-bold ${!post?.active ? 'bg-green-600' : 'bg-red'} text-white shadow-lg`}>
            {!post?.active ? "Active" : "Ended"}
          </div>

          {/* <div className={`absolute top-2 right-20 px-3 py-1 rounded-lg text-xs font-bold ${socials[post?.id]?.color} text-white shadow-lg`}>
            {socials[post?.id]?.name}
          </div> */}

          {/* Pool Name */}
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-sm font-bold px-4 py-1 rounded-lg shadow-md">
            {post?.poolName}
          </div>

          {/* Overlay with Bets and Total Amount */}
          {!post?.active && (
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-3">
            <p className="text-white text-xl font-bold">
              {post?.bets} Bets Placed
            </p>
            <div className="flex items-center space-x-2 text-white text-sm">
              <AiOutlineDollarCircle size={24} />
              <span className="font-semibold">Total Pot: ${post?.totalAmount}</span>
            </div>
            <div className="flex items-center space-x-2 text-white text-sm">
              <AiOutlineCalendar size={24} />
              <span className="font-semibold">Ends on: {post?.endDate}</span>
            </div>
          </div>
          )}
          {/* Ended Pool Details: Final Score, Total Reward, and Winners */}
          {post?.active && (
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-3 p-4">
              <p className="text-white text-lg font-bold">Final Score: {post?.finalScore}</p>
              <div className="flex items-center space-x-2 text-white text-sm">
                <AiOutlineDollarCircle size={24} />
                <span className="font-semibold">Reward Distributed: ${post?.totalRewardDistributed}</span>
              </div>
              <div className="flex items-center space-x-2 text-white text-sm">
                <FaTrophy size={24} />
                <span className="font-semibold">Winners: {post?.winners?.join(", ")}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
