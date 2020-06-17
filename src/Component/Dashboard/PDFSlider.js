import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import ReactAudio from 'react-audio-player';
import './pdfSlideView.css';


export default function PDFSlider() {
    const [pdfpage, setPage] = React.useState(1)

    // const [audioURL, setAudioUrl] = React.useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
    const [audioURL, setAudioUrl] = React.useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');

    const handleChange = (page) => {
        setPage(page)
        setAudioUrl("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    }

    return (
        <>
            <div align='center' className='slideview'>
                <ReactAudio
                    src={audioURL}
                    autoplay
                    controls
                />
                <PDFViewer
                    document={{
                        url: 'https://2z8mp249nxrv2qpyod45qtxt-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/SAMPLE-WEBINAR-SLIDES.pdf',
                    }}
                    scale={1}

                    protectContent={true}
                    watermark={{
                        text: "Sample Sheet",
                        diagonal: true,
                        opacity: '1',
                        size: '40',
                        color: 'blue'

                    }}

                    onNextBtnClick={(page) => handleChange(page)}
                />
                <h2>Page Audio {pdfpage}</h2>
            </div>


        </>


    );
}