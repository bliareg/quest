import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Chat } from 'components/Chat'
import { Story } from 'utils';
import { getChatPostInterviewStory } from 'stories'
import { PostInterviewState, postInterview } from 'state';
import { subscribe } from 'hocs';

type Props = {
} & RouteComponentProps<{}> & PostInterviewState;

@subscribe(postInterview.store)
class PostInterview extends React.Component<Props, PostInterviewState> {

  story: Story<PostInterviewState>;
  constructor(props: Props) {
    super(props);
    this.story = getChatPostInterviewStory({});
  }

  componentDidMount() {
    postInterview.events.reset(0);
    this.story.start();
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
      </>
    );
  }
}

const PostInterviewScreen = withRouter(PostInterview)
export { PostInterviewScreen };
