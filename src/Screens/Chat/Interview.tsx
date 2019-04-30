import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Chat } from 'components/Chat'
import { Registration } from 'components/Registration'
import { Story } from 'utils';
import { getChatInterviewStory } from 'stories'
import { InterviewState, getInterviewDefaultState, interviewReducers } from 'state';

type Props = {
} & RouteComponentProps<{}>;

class Interview extends React.Component<Props, InterviewState> {

  story: Story;
  constructor(props: Props) {
    super(props);
    this.state = getInterviewDefaultState();
    this.story = getChatInterviewStory({}, this.getCurrentState, this.onChange);
  }

  componentDidMount() {
    this.story.start();
  }

  getCurrentState = () => {
    return this.state;
  }

  onChange = (state: InterviewState, callback: () => void = () => {}) => {
    this.setState(state, callback);
  }

  onChangeRegistrationOpen = (value: boolean) => {
    this.onChange(interviewReducers.changeRegistrationModal(this.state, value));
  }

  registrationProps = () => {
    const { isRegistrationOpen } = this.state;

    const onSubmit = () => {
      this.onChangeRegistrationOpen(false);
      this.story.proceed();
    }

    return { onSubmit, isOpen: isRegistrationOpen, onChange: this.onChangeRegistrationOpen };
  }

  render() {
    const { messages, animation } = this.state;
    const { left, right } = animation;

    return(
      <>
        <Chat
          animationSrc={{ left, right }}
          messages={messages}
        />
        <Registration {...this.registrationProps()} />
      </>
    );
  }
}

const InterviewScreen = withRouter(Interview)
export { InterviewScreen };
