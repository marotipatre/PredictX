"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter,useSearchParams } from "next/navigation";
import {
  FaTrophy,
  FaChartLine,
  FaUserFriends,
  FaEtsy,
  FaDollarSign,
} from "react-icons/fa";
import Button from "@/components/Resusables/Button";
import RecentBets from "@/components/explore/RecentBets";
import BetNowModal from "@/components/explore/BetnowModal";
import Countdown from "react-countdown";
import BetsGraph from "@/components/explore/BetsGraph";
import { useDataContext } from "@/context/DataContext";


const getDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toDateString();
};

const PoolDetailPage: React.FC = () => {
  const { id } = useParams();
  const searchParams = useSearchParams()
  const typeValue = searchParams.get('type');
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBetted, setIsBetted] = useState(false);
  const { totalPools, userBetsData,loading } = useDataContext();
  const router = useRouter();

  const addQueryParam = () => {
    router.push({
      pathname: router.pathname,  // keeps the current path
      query: { ...router.query, type: 'coin' },  // adds the new query parameter
    });
  };

  useEffect(() => {
    addQueryParam();
  }, []);

  useEffect(() => { 
    const val =
      userBetsData?.length > 0 &&
      userBetsData?.find((item) => item?.poolId == id);
    if (val) {
      setIsBetted(true);
    } else {
      setIsBetted(false);
    }
  }, [userBetsData]);

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500 text-center">{error}</div>;
  }
  return (
    <section className="text-white items-center flex flex-col justify-center container mx-auto px-4 py-12 mt-24 rounded-lg shadow-lg">
      {/* Tabs Section */}
      <div className="w-full flex flex-start ">
        <button
          onClick={() => router.back()}
          className="mb-2 text-gray-400 p-2 rounded-md transition duration-300"
        >
          Back
        </button>
      </div>
      <div className="flex flex-start w-full space-x-4 mb-2">
        <button
          onClick={() => setActiveTab("overview")}
          className={`${
            activeTab === "overview"
              ? "bg-gray-700 text-white"
              : "bg-gray-800 text-gray-400"
          } p-2 rounded-md transition duration-300`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("recentBets")}
          className={`${
            activeTab === "recentBets"
              ? "bg-gray-700 text-white"
              : "bg-gray-800 text-gray-400"
          } p-2 rounded-md transition duration-300`}
        >
          Recent Bets
        </button>
      </div>
      <div className="flex w-full flex-col md:flex-row justify-between gap-6">
        {/* Overview Section */}
        <div className="p-6 border border-gray-700 rounded-lg shadow-md md:w-3/4 bg-gray-900">
          {activeTab === "overview" && (
            <>
              <div className="flex items-center justify-between w-full">
                <h1 className="text-3xl mb-4 font-bold text-primary-500">
                  Pool #000{id}
                </h1>

                <Countdown
                  className="text-3xl text-green-400 mb-4"
                  date={
                     isNaN(Number(totalPools[id as number]?.endTime)) ? new Date(Date.now()) : new Date(Number(totalPools[id as number]?.endTime) * 1000)
                  }
                  intervalDelay={0}
                  precision={3}
                />
              </div>
              <p className="text-lg mb-6">Betting pool for the upcoming championship.</p>

              <h2 className="text-3xl font-bold mt-8 mb-4">How It Works</h2>
              <ol className="list-decimal list-inside space-y-4 mb-6 text-lg">
                <li>Safely link your digital wallet to start placing bets.</li>
                <li>Place your bets on the outcomes of your choice.</li>
                <li>Earn points based on the accuracy of your predictions.</li>
                <li>
                  Monitor your performance and compete on the leaderboard.
                </li>
              </ol>
              
            </>
          )}
          {activeTab === "recentBets" && (
            <RecentBets betsData={totalPools[id as number]?.bets} />
          )}
        </div>
        {/* Pool Details Section */}
        <div className="p-6 border border-gray-700 rounded-lg shadow-md md:w-1/2 bg-gray-900">
          {activeTab === "recentBets" && (
            <BetsGraph betsData={totalPools[id as number]?.bets} />
          )}
          {activeTab === "overview" && (
            <>
              <h2 className="text-3xl mb-2">Pool Details</h2>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 mt-8">
                <div className="flex flex-col">
                  <p className="text-5xl text-blue-500 font-semibold">
                    {totalPools[id as number]?.total_bets
                      ? totalPools[id as number]?.total_bets
                      : "---"}
                  </p>
                  <div className="flex items-center">
                    <FaEtsy className="text-yellow-400 mr-2" />
                    <p>Total Bets</p>{" "}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-blue-500 text-5xl font-semibold">
                    {totalPools[id as number]?.total_amount
                      ? totalPools[id as number]?.total_amount
                      : "---"}
                    <span className="text-yellow-400 text-xl"> Buzz</span>
                  </p>
                  <div className="flex items-center">
                    {" "}
                    <FaChartLine className="text-green-400 mr-2" />
                    <p>Total Amount Bet</p>{" "}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-5xl text-blue-500 font-semibold">
                    {totalPools[id as number]?.total_bets}
                  </p>
                  <div className="flex items-center">
                    {" "}
                    <FaUserFriends className="text-purple-400 mr-2" />
                    <p>Unique Users</p>{" "}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-5xl text-blue-500 font-semibold">
                    {totalPools[id as number]?.finalScore
                      ? totalPools[id as number]?.finalScore
                      : "---"}
                  </p>
                  <div className="flex items-center">
                    {" "}
                    <FaTrophy className="text-blue-400 mr-2" />
                    <p>Final Score</p>{" "}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-blue-500 font-semibold">
                    {totalPools[id as number]?.startTime
                      ? getDate(+totalPools[id as number]?.startTime)
                      : "---"}
                  </p>
                  <div className="flex items-center">
                    {" "}
                    <FaTrophy className="text-blue-400 mr-2" />
                    <p>Start Date</p>{" "}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-blue-500 font-semibold">
                    {totalPools[id as number]?.endTime
                      ? getDate(+totalPools[id as number]?.endTime)
                      : "---"}
                  </p>
                  <div className="flex items-center">
                    {" "}
                    <FaTrophy className="text-blue-400 mr-2" />
                    <p>End Date</p>{" "}
                  </div>
                </div>

                <div className="flex flex-col">
                  <p className="text-xl text-blue-500 font-semibold">
                    {totalPools[id as number]?.poolEnded ? (
                      <span className="text-red text-2xl text-center">🔴</span>
                    ) : (
                      <span className="text-green-300 text-2xl text-center">
                        🟢
                      </span>
                    )}
                  </p>
                  <div className="flex items-center">
                    {" "}
                    <FaTrophy className="text-blue-400 mr-2" />
                    <p>Pool Status</p>{" "}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-4xl text-red font-semibold">300</p>
                  <div className="flex items-center">
                    {" "}
                    <FaTrophy className="text-blue-400 mr-2" />
                    <p>Last Score Achieved</p>{" "}
                  </div>
                </div>
              </div>

              {isBetted ? (
                <Button
                  containerClassName="flex items-center justify-center w-full mt-8"
                  icon="/images/Wallet.svg"
                >
                  You Already Bet
                </Button>
              ) : (
                <Button
                  containerClassName="flex items-center justify-center w-full mt-8"
                  icon="/images/Wallet.svg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Place a Bet
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Recent Bets Section */}

      {/* Bet Now Modal */}
      <BetNowModal
        id={id}
        isOpen={isModalOpen}
        max={typeValue==="creator"  ? 100 : 87000}
        min={typeValue==="creator"  ? 1 : 80000}
        step={typeValue==="creator"  ? 1 : 100}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default PoolDetailPage;
