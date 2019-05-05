import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Chat } from 'components/Chat'
import { Registration } from 'components/Registration'
import { Story } from 'utils';
import { getChatInterviewStory } from 'stories'
import { InterviewState, interview } from 'state';
import { subscribe } from 'hocs';

type Props = {
} & RouteComponentProps<{}> & InterviewState;

@subscribe(interview.store)
class Interview extends React.Component<Props, InterviewState> {

  story: Story<InterviewState>;
  constructor(props: Props) {
    super(props);
    this.story = getChatInterviewStory({});
  }

  componentDidMount() {
    this.story.start();
  }

  onChangeRegistrationOpen = (value: boolean) => {
    interview.events.changeRegistrationModal(false);
  }

  registrationProps = () => {
    const { isRegistrationOpen } = this.props;

    const onSubmit = () => {
      this.onChangeRegistrationOpen(false);
      this.story.proceed();
    }

    return { onSubmit, isOpen: isRegistrationOpen, onChange: this.onChangeRegistrationOpen };
  }

  render() {
    const { messages, animation } = this.props;
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
