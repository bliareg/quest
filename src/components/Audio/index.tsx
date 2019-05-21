import * as React from 'react';
import { SkypeSound } from 'assets/audio/';

const AudioPlayer = () => {
    return (
        <audio
            id="audio_player"
            autoPlay
            loop
            src={SkypeSound}
        />
    )
};

export default AudioPlayer;