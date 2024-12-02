import React from "react";

const PerformanceTable = ({ profileData }: { profileData: any }) => {
  return (
    <div className="bg-transparent text-light-1 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 text-primary-600">Performance History</h2>
      <table className="min-w-full border-collapse rounded-md border border-gray-700">
        <thead>
          <tr className="bg-dark-1 text-light-1">
            <th className="border border-gray-600 p-2">Pool ID</th>
            <th className="border border-gray-600 p-2">Actual Score Calculated</th>
            <th className="border border-gray-600 p-2">Avg. Predicted Score</th>
            <th className="border border-gray-600 p-2">Engagement Rate</th>
          </tr>
        </thead>
        <tbody>
          {profileData.performanceHistory?.map((entry: any, index: number) => (
            <tr key={index} className="hover:bg-dark-3 transition-colors duration-300">
              <td className="border border-gray-600 p-2">{entry.poolId}</td>
              <td className="border border-gray-600 p-2">{entry.score}</td>
              <td className="border border-gray-600 p-2">{entry.predictions}</td>
              <td className="border border-gray-600 p-2">{entry.engagementRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceTable;
