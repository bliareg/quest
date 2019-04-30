import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Chat } from 'components/Chat'
import { Registration } from 'components/Registration'
import { Story } from 'utils';
import { getChatInterviewStory } from 'stories'
import { InterviewState, interview } from 'state';

type Props = {
} & RouteComponentProps<{}>;

class Interview extends React.Component<Props, InterviewState> {

  subId: string | undefined
  story: Story<InterviewState>;
  constructor(props: Props) {
    super(props);
    this.story = getChatInterviewStory({});
    this.state = this.story.store.state;
  }

  componentDidMount() {
    this.subId = this.story.store.subscribe(() => {
      console.log(this.story.store);
      this.setState(this.story.store.state);
    });

    this.story.start();
  }

  componentWillUnmount() {
    this.story.store.unsubscribe(this.subId || '');
  }

  onChangeRegistrationOpen = (value: boolean) => {
    this.story.store.commiteChange(
      interview.reducers.changeRegistrationModal,
      value
    );
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
