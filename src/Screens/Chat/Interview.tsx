import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Chat } from 'components/Chat'
import { Story } from 'utils';
import { getChatInterviewStory } from 'stories'

type Props = {
} & RouteComponentProps<{}>;

type State = {
  animation: {
    left: '',
    right: ''
  },
  messages: []
}

class Interview extends React.Component<Props, State> {

  story: Story;
  constructor(props: Props) {
    super(props);
    this.state = {
      animation: { left: '', right: '' },
      messages: []
    }

    this.story = getChatInterviewStory({}, this.getCurrentState, this.onChange);
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

const InterviewScreen = withRouter(Interview)
export { InterviewScreen };
