import { Story } from 'utils';
import { Action, ActionArgs } from 'types';
import { Animation } from 'components/Animation';
import { interviewActions } from 'actions';
const { ChangeAnimation, Message, FillFormButton } = interviewActions;

const getChatInterviewStory = (
  callbacks: Object,
  getCurrentState: Function,
  onChange: Function
): Story => {
  const story = new Story(callbacks, getCurrentState, onChange);
  const actions = buildActions(story, getCurrentState, onChange);

  story.setActions(actions);

  return story;
}

const buildActions = (...actionArgs: ActionArgs): Action[] => {
  return [
    new ChangeAnimation({ left: Animation.types.boss }, 0, ...actionArgs),
    new Message('Здравствуйте!', 800, ...actionArgs),
    new Message('Мы рады приветствовать Вас в нашем офисе.', 1500, ...actionArgs),
    new Message('Итак, вы хотите устроиться на работу в нашу компанию?', 1500, ...actionArgs),
    new Message('Для начала я предлагаю вам заполнить нашу анкету…', 1500, ...actionArgs),
    new FillFormButton(1500, ...actionArgs),
  ]
}

export { getChatInterviewStory };
