import { Action as ActionType } from 'types';
import { Story  } from './story';

class Action<T> implements ActionType<T> {

  story: Story<T>;
  value: any;
  timeout: number;

  constructor(value: any, timeout: number, story: Story<T>) {
    this.value = value;
    this.timeout = timeout;
    this.story = story;
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
