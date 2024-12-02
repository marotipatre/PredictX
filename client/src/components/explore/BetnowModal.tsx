import React, { useState } from "react";
import Modal from "react-modal"; // Ensure to install this package or use any other modal library
import Slider from "react-input-slider"; // Ensure to install this package or use another slider library
import { IoClose } from "react-icons/io5"; // Import close icon from react-icons
import { useDataContext } from "@/context/DataContext";
interface BetNowModalProps {
  id : string[],
  isOpen: boolean;
  onClose: () => void;
  max: number;
  min : number;
  step: number;
}

const BetNowModal: React.FC<BetNowModalProps> = ({ id ,isOpen, onClose,max,min,step }) => {
  const [scorePrediction, setScorePrediction] = useState(min); // Default value for the slider
  const [investment, setInvestment] = useState("");
  const [selectedToken, setSelectedToken] = useState("buzzToken");
  const [tenurePeriod, setTenurePeriod] = useState("oneDay");
  const { placeBet } = useDataContext();

  const handleTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedToken(event.target.value);
  };

  const handleTenureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTenurePeriod(event.target.value);
  };

  const handleSubmit = async () => {
    // Handle form submission logic here
    console.log({
      scorePrediction,
      investment,
      selectedToken,
      tenurePeriod,
    });
    await placeBet(+id,+investment.toString(),scorePrediction);
    onClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-gray-800 text-white p-6 rounded-sm shadow-lg w-fit mx-auto relative"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70" 
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
      >
        <IoClose size={24} />
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">Place Your Bet</h2>

      {/* Score Prediction Slider */}
      <div className="mb-4">
        <label className="block mb-2">Predict Score:</label>
        <div className=" flex  flex-col-reverse items-start gap-2">
        <Slider
          axis="x"
          x={scorePrediction}
          onChange={({ x }) => setScorePrediction(x)}
          xmin={+min.toString()}
          xmax={+max.toString()}
          xstep={+step.toString()}
          styles={{
            track: {
              backgroundColor: "gray",
            },
            active: {
              backgroundColor: "blue",
            },
            thumb: {
              width: 20,
              height: 20,
              backgroundColor: "white",
              border: "2px solid blue",
            },
          }}
        />
        <p className="mt-2 text-center  font-semibold text-4xl text-p1">{scorePrediction}</p>
        </div>
      </div>

      {/* Investment Input */}
      <div className="mb-4">
        <label className="block mb-2">Investment Amount:</label>
        <div className="flex items-center">
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            className="flex-grow bg-gray-700 text-white p-2 rounded-md"
            placeholder="Enter amount"
          />
          <select
            value={selectedToken}
            onChange={handleTokenChange}
            className="ml-2 bg-gray-700 text-white p-2 rounded-md"
          >
            <option value="usdc">USDC</option>
            <option value="usdt">USDT</option>
            <option value="buzzToken">Buzz Token</option>
          </select>
        </div>
      </div>

      {/* Tenure Period Radio Buttons */}
      <div className="mb-4">
        <label className="block mb-2">Select Tenure Period:</label>
        <div className="flex flex-row gap-2">
          {["oneDay", "oneWeek", "oneMonth"].map((period) => (
            <label key={period} className="flex items-center">
              <input
                type="radio"
                value={period}
                checked={tenurePeriod === period}
                onChange={handleTenureChange}
                className="mr-2"
              />
              {period.charAt(0).toUpperCase() + period.slice(1).replace("one", "")}
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Submit Bet
      </button>
    </Modal>
  );
};

export default BetNowModal;
