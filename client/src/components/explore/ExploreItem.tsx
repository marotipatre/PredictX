import clsx from "clsx";
import Link from "next/link"; // Import Link for navigation in Next.js
import Button from "../Resusables/Button";

interface ExploreItemProps {
  item: {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    platform?: string;
    marketcap?: string;
    price?: string;
  };
  containerClassName?: string;
}

const ExploreItem: React.FC<ExploreItemProps> = ({
  item,
  containerClassName,
}) => {
  return (
    <div
      className={clsx(
        `relative  ${item?.type === "creator"  ? "h-80 w-full" :item?.type === "coin"  ? "h-60 w-60" : "h-80 w-full"} bg-cover bg-center rounded-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105`,
        containerClassName
      )}
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <div className="absolute top-2 right-2 g7 text-white text-xs px-2 py-1 rounded shadow-lg">
        {item?.type === "creator" && (
          <>
            {item.platform === "farcaster" && <span>Twitter</span>}
            {item.platform === "instagram" && <span>Twitter</span>}
            {item.platform === "twitter" && <span>Twitter</span>}
            {item.platform === "youtube" && <span>Twitter</span>}
          </>
        )}
      </div>

      {/* Overlay for Hover Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center">
        <div className="text-center text-white px-4 mb-12">
          <p className="text-lg font-bold mb-1">{item.name}</p>
          <p className="text-sm mb-2">
            {item?.type === "creator" ? `Description : ${item?.description}`: item?.type === "coin" ? `Symbol : ${item?.symbol}`: `Description : ${item?.description}`}
          </p>
          <p className="text-sm font-semibold">
            {item?.type === "creator" ? `${item?.followers} followers` : item?.type === "coin" ? `${item?.price} Price` :`${item?.followers} followers` } 
          </p>
        </div>

        {/* Button for navigation to /explore/:id */}
        <Button
          containerClassName="w-full items-center justify-center flex"
          href={item?.type === "creator" ? `/explore/${item.id}` : item?.type === "coin" ? `/coins/${item.id}` : `/sport/${item.id}`}
        >
          Predict {item?.type === "creator" ? "Creator" :item?.type === "coin" ? "Coin" : "Stats"}
        </Button>
      </div>
    </div>
  );
};

export default ExploreItem;
