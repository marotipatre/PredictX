"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaPlay as PlayIcon,
  FaPause as PauseIcon,
  FaHeart as LikedIcon,
  FaRegHeart as LikeIcon,
  FaShare as ShareIcon,
  FaCommentDots as CommentIcon,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import { IoClose as CloseIcon } from "react-icons/io5";
import { ImMusic as SongIcon } from "react-icons/im";
import { RWebShare } from "react-web-share";

type User = {
  name: string;
  avatar: string;
  username: string;
  verified: boolean;
};

type Comment = {
  id: string;
  user: User;
  comment: string;
  timestamp: number;
  likedBy: boolean;
};

type Song = {
  name: string;
  artists: string;
  cover: string;
};

type Video = {
  id: string;
  caption: string;
  src: string;
  user: User;
  data: {
    likes: number;
    comments: Comment[];
    shares: number;
  };
  song: Song;
  tags: string[];
};

type ReelsVideoCardProps = {
  video: Video;
};

const ReelsVideoCard: React.FC<ReelsVideoCardProps> = ({ video }) => {
  const [comments, setComments] = useState<number>(0);
  const [likes, setLikes] = useState<number>(0);
  const [shares, setShares] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [commentsOpen, setCommentsOpen] = useState<boolean>(false);
  const [isDepositOpen, setIsDepositOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timelineWidth, setTimelineWidth] = useState<number>(0);
  const [buttonOpacity, setButtonOpacity] = useState<number>(0);
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onHandleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepositAmount(Number(e.target.value));
  };

  const handleDepositLocked = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your deposit logic here
    console.log(depositAmount);
    setIsDepositOpen(false);
  };

  const callBack = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsPlaying(entry.isIntersecting);
    if (videoRef.current) {
      entry.isIntersecting ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const showButton = () => {
    setButtonOpacity(0.5);
    setInterval(() => {
      setButtonOpacity(0);
    }, 3000);
  };

  const ToggleLike = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => prevComments + 1);
      setLikes((prevLikes) => prevLikes + 2);
      setShares((prevShares) => prevShares + 10);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full snap-start rounded overflow-hidden" id={video.id}>
      <video
        ref={videoRef}
        className="h-full w-full cursor-pointer object-cover"
        src={video.src}
        preload="none"
        playsInline
        muted={false}
        onDoubleClick={ToggleLike}
        autoPlay={true}
        onClick={() => {
          showButton();
          setIsPlaying(!isPlaying);
          if (videoRef.current) {
            isPlaying ? videoRef.current.pause() : videoRef.current.play();
          }
        }}
        onTimeUpdate={() =>
          setTimelineWidth(
            (videoRef.current?.currentTime! / videoRef.current?.duration!) * 100
          )
        }
        loop
      ></video>
      <div
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-8xl outline-none z-10"
        style={{
          opacity: isPlaying ? buttonOpacity : 0.5,
          pointerEvents: "none",
        }}
      >
        <button className="outline-none" title={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <div className="absolute flex flex-col items-center gap-7 bottom-36 right-2">
        <div className={`${liked ? "text-red-500" : "text-white"} text-center text-3xl`}>
          <button onClick={ToggleLike}>
            {liked ? <LikedIcon className="text-red-500" /> : <LikeIcon />}
            <p className="text-xs mt-2">{likes}</p>
          </button>
        </div>
        <div className="text-white text-center text-3xl">
          <button onClick={() => setCommentsOpen(true)}>
            <CommentIcon />
            <p className="text-xs mt-2">{comments}</p>
          </button>
        </div>
        <div className="text-white text-center text-3xl">
          <button onClick={() => setIsDepositOpen(true)}>
            <FaMoneyCheckAlt />
            <p className="text-xs mt-0 font-semibold">
              <span className="text-green-400">{depositAmount} DEGO</span>
            </p>
          </button>
        </div>
        <div className="text-white text-center text-3xl">
          <RWebShare
            data={{
              text: `${video.user.username} shared a video`,
              url: `${window.location.origin}/reels#${video.id}`,
              title: `${video.caption}`,
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <button>
              <ShareIcon />
              <p className="text-xs mt-2">{shares}</p>
            </button>
          </RWebShare>
        </div>
      </div>
      <div className="absolute bottom-0 p-4 bg-gradient-to-b from-transparent via-black/50 to-black text-white w-full flex items-center justify-between left-0">
        <div>
          @{video.user.username}
          {video.user.verified && (
            <VerifiedIcon className="text-blue-500 inline-flex" />
          )}
          <p className="text-xs mt-2">
            {video.caption} <b>#{video.tags[0]}</b>
          </p>
          <div className="flex items-center gap-3 my-2">
            <div>
              <SongIcon size={13} />
            </div>
            <div className="text-xs block h-full w-full min-w-[150px] overflow-hidden whitespace-nowrap relative">
              <div className="absolute animate-marquee">
                {video.song.name} by {video.song.artists}
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0">
          <img
            src={video.song.cover}
            alt={video.song.name}
            loading="lazy"
            className="h-12 w-12 rounded-full shrink-0 !object-cover animate-spin-slow duration-300 aspect-square"
          />
        </div>
      </div>
      <div
        className="absolute bg-white bottom-0 left-0 h-1 rounded transition-all"
        style={{
          width: `${timelineWidth}%`,
        }}
      ></div>
      {commentsOpen && (
        <div className="absolute bottom-0 left-0 w-full h-auto p-4 bg-gray-200 z-30 rounded-lg rounded-l-lg">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg">Comments</div>
            <button className="text-2xl aspect-square" onClick={() => setCommentsOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {video.data.comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-center justify-between gap-3 bg-gray-100 p-3 rounded-xl"
              >
                <img
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  className="h-12 aspect-square rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <b className="">{comment.user.name}</b>
                  <p className="text-sm">{comment.comment}</p>
                </div>
                <div className="text-gray-500 text-sm">{new Date(comment.timestamp).toLocaleTimeString()}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {isDepositOpen && (
        <div className="absolute bottom-0 left-0 w-full h-auto p-4 bg-gray-200 z-30 rounded-lg rounded-l-lg">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg">Deposit</div>
            <button className="text-2xl aspect-square" onClick={() => setIsDepositOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-[200px] text-black z-50 flex flex-col gap-4 shadow-xl p-3 rounded-xl my-2 overflow-scroll">
              <div className="flex items-center justify-between gap-3 bg-gray-100 p-3 rounded-xl">
                <input
                  type="number"
                  className="h-10 w-full p-2 rounded"
                  placeholder="Enter deposit amount"
                  value={depositAmount}
                  onChange={onHandleDepositChange}
                />
              </div>
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleDepositLocked}
              >
                Deposit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReelsVideoCard;
