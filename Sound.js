import React from 'react'
import "../Linkpage/Sound.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Sound() {
  return (
    <div className="Con">
      <div className="musicdiv">
        <iframe src="https://anchor.fm/uyiekpen-osazie/embed" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
      </div>
      {/* <AudioPlayer
        autoPlay
        src="https://anchor.fm/uyiekpen-osazie/embed" height="102px" width="400px" frameborder="0" scrolling="no"
        onPlay={e => console.log("onPlay")}
      // other props here
      /> */}
    </div>
  )
}

export default Sound


