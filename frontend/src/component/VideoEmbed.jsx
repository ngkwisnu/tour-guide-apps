import video from '../assets/about.mp4';
import React, { useRef } from 'react';

const VideoEmbed = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <div>
      <video ref={videoRef} autoplay loop muted width="100%" height="500" className="object-cover inline-block" onMouseEnter={handleMouseEnter}>
        <source autoplay src={video} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  );
};

export default VideoEmbed;
