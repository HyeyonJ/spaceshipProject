import React, { Component} from "react"
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';

// class Intro extends Component {
//     render( ) {
    const Video = () => {
    return (
        // <video controls width="100%"
        //     <source src="/videos/space2.mp4" type="video/mp4"/>
        // </video>

        // <div className="player-wrapper">
        //     <ReactPlayer
        //         className='react-player fixed-bottom'
        //         url="/videos/space2.mp4"
        //         width="100%"
        //         height="100%"
        //         controls ={false}
        // />
        // </div>
        <div>
        <video src="/videos/space3.mp4" typeof="video/mp4" 
        muted="muted" autoPlay="autoPlay" loop="loop" width='100%' 
        style={{display:'inline-block'}}/>

        {/* <audio autoPlay loop  id="playAudio">
            <source src="audio/source.mp3"/>
        </audio> */}
        {/* <iframe src="/audios/space3.mp3" allow="autoplay" style="display:none" id="iframeAudio"/> */}
         
         {/* <ReactAudioPlayer
            src="/audios/space3.mp3" autoPlay="true" loop="true" controls muted
            />  */}
        </div>
    );
}


export default Video;