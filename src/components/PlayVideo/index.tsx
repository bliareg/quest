import * as React from 'react';

type Props = {
  source: string,
  onEnd: Function,
  videoProps?: Object
}

class PlayVideo extends React.Component<Props> {

  ref = React.createRef<HTMLVideoElement>();

  componentDidMount() {
    if (!this.ref.current) {
      return;
    }
    this.ref.current.onended = this._onVideoEnded;
  }

  _onVideoEnded = () => {
    this.props.onEnd();
  }

  render() {
    const { source, videoProps } = this.props;
    return (
      <video
        height="300"
        width="300"
        autoPlay
        ref={this.ref}
        src={source}
        {...videoProps}
      />
    );
  }
}

export { PlayVideo };
