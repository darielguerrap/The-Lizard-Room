import React from 'react';

const videoLinks = [
    'https://www.youtube.com/embed/6a4T3XNZc2A',
    'https://www.youtube.com/embed/jyllnlYgMP8',
    'https://www.youtube.com/embed/wJg1CVh5dPg',
    'https://www.youtube.com/embed/HFfvj1JWED0',
    'https://www.youtube.com/embed/Elo9wfQ-izE',
    'https://www.youtube.com/embed/2ix9GJD5ZZw',
    'https://www.youtube.com/embed/nJuTLMFPlAE',
    'https://www.youtube.com/embed/29ZxPiMAub4',
    'https://www.youtube.com/embed/Kb0K9gmDLxk',
    'https://www.youtube.com/embed/ktenLThG_v4',
    'https://www.youtube.com/embed/SQ5HxB-7uvg',
    'https://www.youtube.com/embed/iFOVe1X4Vbg',
    'https://www.youtube.com/embed/-9x4UWVJrjM',
    'https://www.youtube.com/embed/3CFilfYrasI',
    'https://www.youtube.com/embed/vMYqz5EXIpU'
];

export const VideoFrame = () => {
  return (
    <div className="videoframe-container">
        <iframe title="videoframe" className="videoframe"      
            src={videoLinks.map(elem => {
                return elem; })
            }>
        </iframe>
    </div>
  )
};
