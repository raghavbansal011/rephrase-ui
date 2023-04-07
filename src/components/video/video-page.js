import React from "react";
import { videos } from './video-stub.js'
import VideoItem from './video-item'
import './video.css'

const VideoPage = () => {
  return (
    <div className="video-page">
      {videos.map((video) => (
        <VideoItem key={video.personalization_id} video={video} />
      ))}
    </div>
  );
};

export default VideoPage;
