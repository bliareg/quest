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

  _timeoutPromise(
    timeout: number,
    callback: (
      res: (resolvePromise: boolean) => void
    ) => void
  ): Promise<boolean> {

    return new Promise<boolean>((res, rej) => {
      setTimeout(() => {
        callback(res);
      }, timeout)
    });
  }
}

export { Action };
