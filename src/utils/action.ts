import { Action as ActionType } from 'types';
import { Story  } from './story';

class Action implements ActionType {

  story: Story;
  getCurrentState: Function;
  onChange: Function;

  constructor(story: Story, getCurrentState: Function, onChange: Function) {
    this.story = story;
    this.getCurrentState = getCurrentState;
    this.onChange = onChange;

  }
  async perform() {
    return true;
  }
}

export { Action };
