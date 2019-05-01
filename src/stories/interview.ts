import { Story } from 'utils';
import { Action } from 'types';
import { Animation } from 'components/Animation';
import { interviewActions } from 'actions';
import { InterviewState, interview } from 'state';
const { ChangeAnimation, Message, FillFormButton } = interviewActions;

const getChatInterviewStory = (
  callbacks: Object,
): Story<InterviewState> => {
  const store = interview.store;
  const story = new Story<InterviewState>(callbacks, store);
  const actions = buildActions(story);

  story.setActions(actions);

  return story;
}

const buildActions = (story: Story<InterviewState>): Action<InterviewState>[] => {
  return [
    new ChangeAnimation({ left: Animation.types.boss }, 0, story),
    new Message('Здравствуйте!', 800, story),
    new Message('Мы рады приветствовать Вас в нашем офисе.', 1500, story),
    new Message('Итак, вы хотите устроиться на работу в нашу компанию?', 1500, story),
    new Message('Для начала я предлагаю вам заполнить нашу анкету…', 1500, story),
    new FillFormButton(null, 1500, story),
  ]
}

export { getChatInterviewStory };
