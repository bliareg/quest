import { Action } from 'utils';
import { ActionArgs } from 'types';

class Message extends Action {

  value: string;
  timeout: number;
  constructor(value: string, timeout: number, ...props: ActionArgs) {
    super(...props)
    this.value = value;
    this.timeout = timeout;
  }

  perform() {
    return new Promise<boolean>((res, rej) => {
      const { value, timeout, onChange, getCurrentState, story } = this;

      setTimeout(() => {
        const state = getCurrentState();

        if (story.isInterrupted) {
          return res(false);
        }

        onChange(
          { ...state, messages: [...state.messages, value] },
          () => res(true)
        );
      }, timeout)
    });
  }

}

export { Message };
