import { Story } from 'utils';
import { Action, ActionArgs } from 'types';
import { Message } from 'actions';

const getChatStory = (
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
    new Message('hello', 500, ...actionArgs),
    new Message('there', 500, ...actionArgs),
    new Message('how', 500, ...actionArgs),
    new Message('are', 500, ...actionArgs),
    new Message('u?', 500, ...actionArgs)
  ]
}

export { getChatStory };
