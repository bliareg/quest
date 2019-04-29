import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Chat } from 'components/Chat'
import { Story } from 'utils';
import { getChatStory } from 'stories'

type Props = {
} & RouteComponentProps<{}>;

type State = {
  animation: {
    left: '',
    right: ''
  },
  messages: []
}

class ChatScreen extends React.Component<Props, State> {

  story: Story;
  constructor(props: Props) {
    super(props);
    this.state = {
      animation: { left: '', right: '' },
      messages: []
    }

    this.story = getChatStory({}, this.getCurrentState, this.onChange);
  }

  componentDidMount() {
    this.story.start();
  }

  getCurrentState = () => {
    return this.state;
  }

  onChange = (state: State, callback: () => void = () => {}) => {
    this.setState(state, callback);
  }

  render() {
    const { messages, animation } = this.state;
    const { left, right } = animation;

    return <Chat
      animationSrc={{ left, right }}
      messages={messages}
    />;
  }
}

withRouter(ChatScreen)
export { ChatScreen };
