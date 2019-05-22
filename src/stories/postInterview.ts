import { Story, translate } from 'utils';
import { Action } from 'types';
import { Animation } from 'components/Animation';
import { postInterviewActions } from 'actions';
import { PostInterviewState, interview } from 'state';
import { ROUTES } from 'constants/index';
const { ChangeAnimation, Message, Navigate } = postInterviewActions;

const getChatPostInterviewStory = (
  callbacks: Object,
): Story<PostInterviewState> => {
  const store = interview.store;
  const story = new Story<PostInterviewState>(callbacks, store);
  const actions = buildActions(story);

  story.setActions(actions);

  return story;
};

const t = (key: number | string) => {
  return translate(`stories.postInterview.plain.${key}`)
};

const buildActions = (story: Story<PostInterviewState>): Action<PostInterviewState>[] => {
  return [
    new ChangeAnimation({ left: Animation.types.secretary }, 0, story),
    new Message(t(1), 800, story),
    new Message(t(2), 1500, story),
    new Message(t(3), 1500, story),
    new Message(t(4), 1500, story),
    new Message(t(5), 1500, story),
    new Message(t(6), 1500, story),
    new Message(t(7), 5000, story),
    new Message(t(8), 5000, story),
    new Navigate(ROUTES.login, 7000, story)
  ]
};

export { getChatPostInterviewStory };
