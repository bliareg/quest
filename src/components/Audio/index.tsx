import * as React from 'react';
import { SkypeSound } from 'assets/audio/';

class AudioPlayer extends React.Component<{}> {
    public refs: any;

    componentDidMount(): void {
        this.refs.audio.load();
        this.refs.audio.play();
    }

    render(){
        return (
            <audio
                ref="audio"
                id="audio_player"
                autoPlay
                loop
                src={SkypeSound}
            />
        )
    }
}

export default AudioPlayer;