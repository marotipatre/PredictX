"use client";
import { useParams,useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProfileHeader from "@/components/explore/ProfileHeader";
import ProfileTabs from "@/components/explore/ProfileTabs";
import PostsGrid from "@/components/explore/PostsGrid";
import EngagementGraph from "@/components/explore/EngagementGraph";
import LikeGraph from "@/components/explore/LikeGraph";
import FollowerGraph from "@/components/explore/FollowersGraph";
import Dropdown from "@/components/Resusables/Dropdown";
import PerformanceTable from "@/components/explore/PerformanceTable";
import { useDataContext } from "@/context/DataContext";

const ProfilePage: React.FC = () => {
  const { totalPools } = useDataContext();
  const [transfomedPoolsData,setTransfomedPoolsData] = useState([]);
  const router = useRouter();
  const getTransformedPools = () => {
    const transformedPools =  totalPools?.length && totalPools?.map((pool) => ({
      id: pool?.poolId,
      type:"creator",
      imageUrl: "https://th.bing.com/th/id/OIP.mzHrHGZ3VedhnS1Kqlc0vQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      active: pool?.poolEnded,
      bets: pool.total_bets,
      poolName: `Creator Pool #0000${pool?.poolId}`, // Default naming if poolName is not available
      endDate: "Oct 31, 2024", // Set your desired end date here
      totalAmount: pool?.total_amount,
    }));
    setTransfomedPoolsData(transformedPools);
  };

  const mockProfileData = {
    id: 0,
    type:"creator",
    name: "0xcBe600349CE4cF89842Bc371E4a4062140CDCCcD",

    username: "Donald Trump",
    imageUrl:
      "https://th.bing.com/th/id/OIP.mzHrHGZ3VedhnS1Kqlc0vQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    bio: "Creator | President of the United States of America",
    followers: 688000,
    following: 914,
    performanceHistory: [
      {
        poolId: "pool-1",
        score: 75,
        predictions: 80,
        engagementRate: 0.5,
      },
      {
        poolId: "pool-2",
        score: 85,
        predictions: 90,
        engagementRate: 0.6,
      },
      {
        poolId: "pool-3",
        score: 80,
        predictions: 85,
        engagementRate: 0.55,
      },
      {
        poolId: "pool-4",
        score: 90,
        predictions: 88,
        engagementRate: 0.65,
      },
      {
        poolId: "pool-5",
        score: 92,
        predictions: 95,
        engagementRate: 0.7,
      },
      {
        poolId: "pool-6",
        score: 78,
        predictions: 80,
        engagementRate: 0.52,
      },
      {
        poolId: "pool-7",
        score: 88,
        predictions: 87,
        engagementRate: 0.68,
      },
      {
        poolId: "pool-8",
        score: 95,
        predictions: 93,
        engagementRate: 0.72,
      },
      {
        poolId: "pool-9",
        score: 81,
        predictions: 85,
        engagementRate: 0.6,
      },
      {
        poolId: "pool-10",
        score: 86,
        predictions: 89,
        engagementRate: 0.67,
      },
    ],
  };

  const { id } = useParams();
  const [profileData, setProfileData] = useState(mockProfileData);
  const [activeTab, setActiveTab] = useState("pools");
  const [selectedGraph, setSelectedGraph] = useState("engagement");
  useEffect(() => {
    if (id) {
      setProfileData(mockProfileData);
    }
  }, [id]);

  useEffect(() => {
    getTransformedPools();
  }, [totalPools]);

  const graphOptions = [
    { name: "Engagement Graph", id: "engagement" },
    { name: "Likes Growth", id: "likes" },
    { name: "Follower Growth", id: "followers" },
  ];

  const handleGraphSelect = (item: { name: string; id: string }) => {
    setSelectedGraph(item.id);
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }
  const b = "creator"
  return (
    <section className="container mx-auto px-4 py-12 mt-24">
      <div className="w-full flex flex-start ">
        <button
          onClick={() => router.back()}
          className="mb-2 text-gray-400 p-2 rounded-md transition duration-300"
        >Back</button>
      </div>
      <ProfileHeader
        name={profileData.name}
        username={profileData.username}
        imageUrl={profileData.imageUrl}
        bio={profileData.bio}
        followers={profileData.followers}
        following={profileData.following}
        type={profileData.type}
      />

      {/* Profile Tabs */}
      <div className="flex items-center justify-between">
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Tab Content */}
      {activeTab === "pools" && <PostsGrid type="creator" posts={transfomedPoolsData} />}
      {/* {activeTab === "activity" && <ActivityTab />} */}
      {activeTab === "highlights" && (
        <div className="flex justify-between items-center w-full mb-4">
          <div>Highlights Content</div>
          <Dropdown
            items={graphOptions}
            label="Select Graph"
            onSelect={handleGraphSelect}
            selectedItem={
              graphOptions.find((item) => item.id === selectedGraph) || null
            }
          />
        </div>
      )}

      {/* Graph based on Dropdown selection */}
      {activeTab === "highlights" && selectedGraph === "engagement" && (
        <EngagementGraph
          organicData={[
            { date: "2024-01-01", value: 300 },
            { date: "2024-01-02", value: 500 },
          ]}
          paidData={[
            { date: "2024-01-01", value: 150 },
            { date: "2024-01-02", value: 250 },
          ]}
        />
      )}
      {activeTab === "highlights" && selectedGraph === "likes" && (
        <LikeGraph
          data={[
            { month: "2024-08", likes: 1200 },
            { month: "2024-09", likes: 1500 },
          ]}
        />
      )}
      {activeTab === "highlights" && selectedGraph === "followers" && (
        <FollowerGraph
          comparisonData={[
            {
              label: "Organic Followers",
              data: [
                { month: "2024-08", followers: 8000 },
                { month: "2024-09", followers: 8500 },
                { month: "2024-10", followers: 9000 },
              ],
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
            {
              label: "Paid Followers",
              data: [
                { month: "2024-08", followers: 1000 },
                { month: "2024-09", followers: 1500 },
                { month: "2024-10", followers: 2000 },
              ],
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
            },
          ]}
        />
      )}

      {/* New Tab for Performance History */}
      {activeTab === "performance" && (
        <PerformanceTable profileData={profileData} />
      )}
    </section>
  );
};

export default ProfilePage;
