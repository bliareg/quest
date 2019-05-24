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

const NPrefix = 'Screens.Skype';

const t = (key: number | string) => {
  return translate(`stories.postInterview.plain.${key}`)
};

const name = (key: string) => {
  return translate(`${NPrefix}.${key}`)
};

const buildActions = (story: Story<PostInterviewState>): Action<PostInterviewState>[] => {
  return [
    new ChangeAnimation({ left: Animation.types.secretary }, 0, story),
    new Message({message: t(1), name: name('SkypeSecretary')}, 800, story),
    new Message({message: t(2), name: name('SkypeSecretary')}, 1500, story),
    new Message({message: t(3), name: name('SkypeSecretary')}, 1500, story),
    new Message({message: t(4), name: name('SkypeSecretary')}, 1500, story),
    new Message({message: t(5), name: name('SkypeSecretary')}, 1500, story),
    new Message({message: t(6), name: name('SkypeSecretary')}, 1500, story),
    new Message({message: t(7), name: name('SkypeSecretary')}, 5000, story),
    new Message({message: t(8), name: name('SkypeSecretary')}, 5000, story),
    new Navigate(ROUTES.login, 7000, story)
  ]
};

export { getChatPostInterviewStory };
