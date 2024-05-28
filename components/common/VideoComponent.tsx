import { cardI } from "@/lib/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Save from "../shared/Save";

const VideoComponent = ({ like, videoLink, imgLink }: cardI) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  let randomId = `gig-${Math.random() * 10}`;

  return (
    <div
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
      className="relative w-full h-full">
      {videoLink && (
        <video ref={videoRef} muted playsInline className="absolute size-full object-cover">
          <source src={videoLink} type="video/mp4" />
        </video>
      )}
      {imgLink && <Image className="absolute size-full object-cover" fill src={imgLink} alt="" />}
      <Save idx={randomId} />
      {videoLink && (
        <button className="absolute z-10 left-4 bottom-4 flex items-center justify-center w-7 h-7 rounded-full overflow-hidden bg-black/40">
          {!isVideoPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-4">
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-4">
              <path
                fillRule="evenodd"
                d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default VideoComponent;
