import { Story, translate } from 'utils';
import { Action } from 'types';
import { Animation } from 'components/Animation';
import { interviewActions } from 'actions';
import { InterviewState, interview } from 'state';
import { INTERVIEW_DECISIONS, ROUTES } from 'constants/index';
const { ChangeAnimation, Message, FillFormButton, Branching, RemoveLastMessage, Navigate } = interviewActions;

const getChatInterviewStory = (
  callbacks: Object,
): Story<InterviewState> => {
  const store = interview.store;
  const story = new Story<InterviewState>(callbacks, store);
  const actions = buildActions(story);

  story.setActions(actions);

  return story;
};

const TPrefix = 'stories.interview';
const NPrefix = 'Screens.Skype';

const t = (key: string) => {
  return translate(`${TPrefix}.${key}`)
};

const name = (key: string) => {
  return translate(`${NPrefix}.${key}`)
};

const buildActions = (story: Story<InterviewState>): Action<InterviewState>[] => {
  return [
    new ChangeAnimation({ left: Animation.types.boss }, 0, story),
    new Message({message: t('plain.1'), name: name('SkypeDirector') }, 800, story),
    new Message({message: t('plain.2'), name: name('SkypeDirector')}, 1500, story),
    new Message({message: t('plain.3'), name: name('SkypeDirector')}, 1500, story),
    new Message({message: t('plain.4'), name: name('SkypeDirector')}, 1500, story),
    new FillFormButton(null, 1500, story),
    new RemoveLastMessage(null, 0, story),

    new Branching((state: InterviewState) => {
      if (story.isDecision(INTERVIEW_DECISIONS.canWork)) {
        return [
          new Message({message: t('succ.1'), name: name('SkypeDirector')}, 800, story),
          new Message({message: t('succ.2'), name: name('SkypeDirector')}, 1500, story),
          new Message({message: t('succ.3'), name: name('SkypeDirector')}, 1500, story),
          new Message({message: t('succ.4'), name: name('SkypeDirector')}, 1500, story),
          new ChangeAnimation({ right: Animation.types.secretary }, 1500, story),
          new Message({message: t('succ.5'), name: name('SkypeSecretary')}, 50, story),
          new Message({message: t('succ.6'), name: name('SkypeDirector')}, 1500, story),
          new Message({message: t('succ.7'), name: name('SkypeSecretary')}, 1500, story),
          new ChangeAnimation({ right: '' }, 1500, story),
          new Message({message: t('succ.8'), name: name('SkypeDirector')}, 50, story),
          new Message({message: t('succ.9'), name: name('SkypeDirector')}, 1500, story),

          new Navigate(ROUTES.skypeCallScreen, 5000, story)
        ]
      }

      return [];
    }, 0, story),

    new Branching((state: InterviewState) => {
      if (story.isDecision(INTERVIEW_DECISIONS.cannotWork)) {
        return [
          new Message({message: t('fail.1'), name: name('SkypeDirector')}, 800, story),
          new Message({message: t('fail.2'), name: name('SkypeDirector')}, 1500, story),
          new Message({message: t('fail.3'), name: name('SkypeDirector')}, 1500, story),
          new ChangeAnimation({ right: Animation.types.secretary }, 1500, story),
          new Message({message: t('fail.4'), name: name('SkypeSecretary')}, 50, story),
          new Message({message: t('fail.5'), name: name('SkypeDirector')}, 1500, story),
          new Message({message: t('fail.6'), name: name('SkypeSecretary')}, 50, story),
          new ChangeAnimation({ right: '' }, 1500, story),
          new Message({message: t('fail.7'), name: name('SkypeDirector')}, 1500, story),
          new Message({message: t('fail.8'), name: name('SkypeDirector')}, 1500, story),

          new Navigate(ROUTES.skypeCallScreen, 5000, story)
        ]
      }

      return [];
    }, 0, story),
  ]
};

export { getChatInterviewStory };
