import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface FollowerGraphProps {
  comparisonData: {
    label: string;
    data: { month: string; followers: number }[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const FollowerGraph: React.FC<FollowerGraphProps> = ({ comparisonData }) => {
  const chartData = {
    labels: comparisonData[0].data.map((d) => d.month),
    datasets: comparisonData.map((dataset) => ({
      label: dataset.label,
      data: dataset.data.map((d) => d.followers),
      borderColor: dataset.borderColor,
      backgroundColor: dataset.backgroundColor,
      fill: true,
      tension: 0.3,
      pointRadius: 5,
      borderWidth: 2,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14,
            color: "#FFFFFF", 
          },
        },
      },
      title: {
        display: true,
        text: "Comparison of Follower Growth",
        color: "#FFFFFF", 
        font: {
          size: 18,
          
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: "#333333",
        titleColor: "#ffffff",
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 12, color: "#FFFFFF" },
        borderColor: "#555555",
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
          color: "#FFFFFF",
          font: {
            size: 14,
            
          },
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 12,
            
          },
        },
       
      },
      y: {
        title: {
          display: true,
          text: "Number of Followers",
          color: "#FFFFFF",
          font: {
            size: 14,
            
          },
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 12,
           
          },
        },
       
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-transparent shadow-lg rounded-lg p-6">
        <div className="h-96 w-full">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default FollowerGraph;
