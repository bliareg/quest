import { Story, t as translate } from 'utils';
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
}

const TPrefix = 'stories.interview';

const t = (key: string) => {
  return translate(`${TPrefix}.${key}`)
};


const buildActions = (story: Story<InterviewState>): Action<InterviewState>[] => {
  return [
    new ChangeAnimation({ left: Animation.types.boss }, 0, story),
    new Message(t('plain.1'), 800, story),
    new Message(t('plain.2'), 1500, story),
    new Message(t('plain.3'), 1500, story),
    new Message(t('plain.4'), 1500, story),
    new FillFormButton(null, 1500, story),
    new RemoveLastMessage(null, 0, story),

    new Branching((state: InterviewState) => {
      if (story.isDecision(INTERVIEW_DECISIONS.canWork)) {
        return [
          new Message(t('succ.1'), 800, story),
          new Message(t('succ.2'), 1500, story),
          new Message(t('succ.3'), 1500, story),
          new Message(t('succ.4'), 1500, story),
          new ChangeAnimation({ right: Animation.types.secretary }, 1500, story),
          new Message(t('succ.5'), 50, story),
          new Message(t('succ.6'), 1500, story),
          new Message(t('succ.7'), 1500, story),
          new ChangeAnimation({ right: '' }, 1500, story),
          new Message(t('succ.8'), 50, story),
          new Message(t('succ.9'), 1500, story),

          new Navigate(ROUTES.skypeFinalScreen, 5000, story)
        ]
      }

      return [];
    }, 0, story),

    new Branching((state: InterviewState) => {
      if (story.isDecision(INTERVIEW_DECISIONS.cannotWork)) {
        return [
          new Message(t('fail.1'), 800, story),
          new Message(t('fail.2'), 1500, story),
          new Message(t('fail.3'), 1500, story),
          new ChangeAnimation({ right: Animation.types.secretary }, 1500, story),
          new Message(t('fail.4'), 50, story),
          new Message(t('fail.5'), 1500, story),
          new Message(t('fail.6'), 50, story),
          new ChangeAnimation({ right: '' }, 1500, story),
          new Message(t('fail.7'), 1500, story),
          new Message(t('fail.8'), 1500, story),

          new Navigate(ROUTES.skypeFinalScreen, 5000, story)
        ]
      }

      return [];
    }, 0, story),
  ]
}

export { getChatInterviewStory };
