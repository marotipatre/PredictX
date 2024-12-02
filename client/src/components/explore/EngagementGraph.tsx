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
  TimeScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface EngagementGraphProps {
  organicData: { date: string; value: number }[];
  paidData: { date: string; value: number }[];
}

const EngagementGraph: React.FC<EngagementGraphProps> = ({
  organicData,
  paidData,
}) => {
  const data = {
    labels: organicData.map((d) => new Date(d.date).toLocaleDateString()),
    datasets: [
      {
        label: "Organic Engagement",
        data: organicData.map((d) => d.value),
        borderColor: "#4BC0C0", // Hex code for Organic Engagement line
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Background color with alpha
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Paid Engagement",
        data: paidData.map((d) => d.value),
        borderColor: "#FF6384", // Hex code for Paid Engagement line
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Background color with alpha
        borderWidth: 2,
        pointRadius: 4,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        color: "#FFFFFF",
        labels: {
          font: {
            size: 14,
           
          },
        },
      },
      title: {
        display: true,
        text: "Engagement Metrics",
        color: "#FFFFFF", 
        font: {
          size: 18,
         
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        titleColor: "#ffffff",
        backgroundColor: "#333333", 
        titleFont: { size: 14, weight: "bold"},
        bodyFont: { size: 12, color: "#FFFFFF" }, 
        borderColor: "#555555", 
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Date",
          color: "#ffffff",
          font: {
            size: 14,
            weight: "500",
          },
        },
        ticks: {
          color: "#ffffff",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid lines
        },
      },
      y: {
        title: {
          display: true,
          text: "Engagement",
          color: "#ffffff", // Y-axis title color
          font: {
            size: 14,
            weight: "500",
          },
        },
        ticks: {
          color: "#ffffff",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light grid lines
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-transparent shadow-lg rounded-lg p-6 text-white">
        <div className="h-96 w-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default EngagementGraph;
