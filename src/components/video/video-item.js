import React, { useState } from "react";
import './video.css'

const VideoItem = ({ video }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const toggleMuted = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className='video' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovering ? (
        <>
          <video src={video.url} autoPlay muted={isMuted} controls loop />
          {/* We can always pass controls for more controls.. but to give feel like youtube, we have used mute icon separately in top-right corner */}
          {isMuted ? 
            <img id='mute' className='mute-icon' style={{display: isHovering ? 'block' : 'none'}} onClick={toggleMuted} src='https://icon-library.com/images/unmute-icon/unmute-icon-20.jpg' alt='Unmute icon' />
             : <img id='mute' className='mute-icon' style={{display: isHovering ? 'block' : 'none'}} onClick={toggleMuted} src='https://www.freeiconspng.com/thumbs/sound-off-icon/sound-off-music-mute-off-sound-speaker-volume-icon-16.png' alt='Mute icon' />
          }
        </>
      ) : (
        <div className="thumbnail">
          <img src={video.thumbnail_url} alt={video.personalization_id} />
        </div>
      )}
      <div className='video-info'>
        <a href='\'>Sample Title - {video.personalization_id}</a>
        <div className='secondary-info'>
          <span>{video.personalization_id}</span>
          <span>02: 30</span>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
