import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface LikeGraphProps {
  data: { month: string; likes: number }[];
}

const LikeGraph: React.FC<LikeGraphProps> = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: "Likes",
        data: data.map((d) => d.likes),
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(75, 192, 192, 0.9)");
          gradient.addColorStop(1, "rgba(75, 192, 192, 0.2)");
          return gradient;
        },
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.7)",
        hoverBorderColor: "rgba(255, 255, 255, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#ffffff", // White text for legend
        },
      },
      title: {
        display: true,
        text: "Like Growth Over the Past 2 Months",
        color: "#ffffff", // White title for dark background
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark background for tooltips
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
          color: "#ffffff", // X-axis title color
          font: {
            size: 14,
            weight: "500",
          },
        },
        ticks: {
          color: "#ffffff", // X-axis label color
        }
      },
      y: {
        title: {
          display: true,
          text: "Number of Likes",
          color: "#ffffff", // Y-axis title color
          font: {
            size: 14,
            weight: "500",
          },
        },
        ticks: {
          color: "#ffffff", // Y-axis label color
        },
       
        beginAtZero: true, // Ensures chart starts at 0
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
  };

  return (
    <div className="w-full h-96 p-6 md:w-3/4 lg:w-2/3 mx-auto bg-transparent rounded-lg shadow-lg">
      <div className="h-full">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LikeGraph;
