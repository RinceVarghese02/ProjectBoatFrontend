import React from 'react';

const ProductVideos = (props) => {
  return (
    <div className='h-[320px] w-[320px] font-semibold text-[16px] text-center'>
      <video
        src={props.data.video}
        className='h-[320px] w-[320px] rounded-2xl'
        onMouseOver={(e) => e.target.play()} // Play the video on hover
        onMouseOut={(e) => e.target.pause()} // Pause the video when hover ends
        muted // Mute the video so it plays silently
        loop // Loop the video for continuous play
        playsInline // Optimize for mobile playback
      />
      <h1>{props.data.name}</h1>
    </div>
  );
};

export default ProductVideos;
