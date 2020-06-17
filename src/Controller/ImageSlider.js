import React, { useState } from 'react';
import Audio from '../Component/Audio';


function ImageSlider() {

    const [coverURL, setCoverUrl] = useState('http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg');
    const [audioURL, setAudioUrl] = useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');



    const handleChange = () => {
        setCoverUrl("http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg");
        setAudioUrl("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    }

    return (

        <div>
            <Audio
                coverURL={coverURL}
                audioURL={audioURL}
            />
            <button onClick={handleChange}>Next</button>
        </div>

    );
}

export default ImageSlider;
