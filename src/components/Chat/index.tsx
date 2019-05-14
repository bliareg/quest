import * as React from 'react';
import './_style.scss';
import { Animation } from 'components/Animation';
import { Message } from 'components/Message';
import { isString } from 'lodash';
import { Message as MessageType } from 'types';

type Props = {
  animationSrc: {
    left: string,
    right: string
  },

  messages: Array<MessageType>
}

class Chat extends React.Component<Props, {}> {

  lastMessageRef = React.createRef<HTMLDivElement>();

  componentDidUpdate(nextProps: Props) {
    const isNewMessage = nextProps.messages.length !== this.props.messages.length;

    if (!isNewMessage || !this.lastMessageRef.current) {
      return;
    }

    this.lastMessageRef.current.scrollIntoView();
  }

  _renderMessages() {
    const { messages } = this.props;
    return  messages.map((message, index) => {

      const isLast = index === messages.length - 1;

      if (isString(message.value)) {
        return <Message
            value={message.value}
            key={message.id}
            {...isLast && ({ ref: this.lastMessageRef })}
          />
      }

      return (
        <Message
          key={message.id}
          {...isLast && ({ ref: this.lastMessageRef })}
        >
          {message.value}
        </Message>);
    });
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
