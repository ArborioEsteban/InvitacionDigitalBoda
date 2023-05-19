import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';


const MusicPlayer = () => {
    const [autoPlay, setAutoPlay] = useState(true);

  return (
    <ReactAudioPlayer
      src="../../../public/Johnny B. Good.mp3"
      autoPlay={autoPlay}
      controls
    />
  )
}

export default MusicPlayer