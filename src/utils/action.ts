import shortid from 'shortid'
import { Action as ActionType } from 'types';
import { Story  } from './story';

class Action<VAL, T> implements ActionType<T> {

  story: Story<T>;
  value: VAL;
  timeout: number;
  actionId: string;
  timeoutId: NodeJS.Timer | null = null;
  resolve: Function | null = null;

  constructor(value: any, timeout: number, story: Story<T>) {
    this.value = value;
    this.timeout = timeout;
    this.story = story;
    this.actionId = shortid();
  }

  async perform() {
    return true;
  }

  performNow() {
    return true;
  }

  interceptPerform() {
    this.timeoutId && clearTimeout(this.timeoutId);

    this.resolve && this.resolve(
      this.performNow()
    );
  }


  _timeoutPromise(
    timeout: number,
    callback: (
      res: (resolvePromise: boolean) => void
    ) => void
  ): Promise<boolean> {

    return new Promise<boolean>((res, rej) => {
      this.resolve = res;
      this.timeoutId = setTimeout(() => {

        if (this.story.isFinished) {
          return;
        }

        callback(res);
      }, timeout)
    });
  }
}

export { Action };
