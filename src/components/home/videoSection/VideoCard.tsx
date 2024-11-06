"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

interface VideoCardProps {
  videoUrl: string;
  title: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-sm mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48 w-full">
        {/* Video player */}
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          playing={playing}
          controls={true} // Enable YouTube controls
          light
        />

        {/* Play button overlay */}
        {!playing && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => setPlaying(true)}
          >
            <div className="bg-white text-green-600 rounded-full p-3 cursor-pointer shadow-md">
              <FaPlay size={24} />
            </div>
          </div>
        )}
      </div>

      {/* Video description */}
      <div className="bg-white text-center py-2 line-clamp-2">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
