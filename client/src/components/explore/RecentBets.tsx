import React from 'react'

const RecentBets = ({ betsData }:{betsData:any}) => {
    return (
      <div className="bg-transparent w-full text-light-1 p-2 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 text-primary-600">Bets History</h2>
        <table className="min-w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-dark-1 text-light-1">
              <th className="border border-gray-600 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Bet ID</th>
              <th className="border border-gray-600 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
              <th className="border border-gray-600 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">User</th>
              <th className="border border-gray-600 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Predicted Score</th>
              <th className="border border-gray-600 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {betsData?.map((bet:any, index:number) => (
              <tr key={index} className="hover:bg-gray-800 transition-colors duration-300">
                <td className="border border-gray-600 px-6 py-4 whitespace-nowrap text-sm text-gray-400">{index}</td>
                <td className="border border-gray-600 px-6 py-4 whitespace-nowrap text-sm text-gray-400">{`${bet.amount}`} Buzz</td>
                <td className="border border-gray-600 px-6 py-4 whitespace-nowrap text-sm text-gray-400">{bet.user.toString().slice(0,5)}...{bet.user.toString().slice(32)}</td>
                <td className="border border-gray-600 px-6 py-4 whitespace-nowrap text-sm text-gray-400">{bet.targetScore}</td>
                <td className="border text-center border-gray-600 px-6 py-4 whitespace-nowrap text-sm text-gray-400">{bet.claimed ? <span className="text-center">🔴</span> : <span className="text-center">🟢</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RecentBets;
  

