import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Chat } from 'components/Chat'
import { Registration } from 'components/Registration'
import { Story, t } from 'utils';
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
    interview.events.reset(0);
    this.story.start();
  }

  componentWillUnmount() {
    this.story.finish();
  }

  onChangeRegistrationOpen = (value: boolean) => {
    interview.events.changeRegistrationModal(false);
  };

  registrationProps = () => {
    const { isRegistrationOpen } = this.props;

    const onSubmit = () => {
      this.onChangeRegistrationOpen(false);
      this.story.proceed();
    };

    return { onSubmit, isOpen: isRegistrationOpen, onChange: this.onChangeRegistrationOpen };
  };

  onNext = () => {
    this.story.forceNext();
  };

  render() {
    const { messages, animation } = this.props;
    const { left, right } = animation;

    return(
      <>
        <Chat
          animationSrc={{ left, right }}
          messages={messages}
        />
        {/*<button onClick={this.onNext}>{t('Screens.Interview.next')}</button>*/}
        <Registration {...this.registrationProps()} />
      </>
    );
  }
}

const InterviewScreen = withRouter(Interview);
export { InterviewScreen };
