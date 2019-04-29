import * as React from 'react';
import './_style.scss';
import { Animation } from 'components/Animation';
import { Message } from 'components/Message';
import shortid from 'shortid';

type Props = {
  animationSrc: {
    left: string,
    right: string
  },
  messages: Array<string>
}

class Chat extends React.Component<Props, {}> {

  _renderMessages() {
    const { messages } = this.props;
    return  messages.map(
      value => <Message key={shortid()} value={value} />
    );
  }

  _renderAnimation() {
    const { left, right } = this.props.animationSrc;
    return <>
        <Animation src={left} />
        <Animation src={right} />
      </>
  }

  render() {
    return (
      <div className="chat-container">
        <div className="animation-container">
          {this._renderAnimation()}
        </div>
        <div className="chat">
          {this._renderMessages()}
        </div>
      </div>
    );
  }
}

export { Chat };