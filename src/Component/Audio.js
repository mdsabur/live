import React from 'react';
import ReactAudio from 'react-audio-player';
import './audio.css';

export default function Audio(props) {


    return (

        <>
            <div>
                <img className="cover"
                    src={props.coverURL}
                    alt="Audio Slider"
                />

            </div>
            <ReactAudio
                src={props.audioURL}
                autoplay
                controls
            />

        </>


    );

}

