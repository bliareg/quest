import { Action } from 'utils';
import { ActionArgs } from 'types';
import { interviewReducers } from 'state';

class Message extends Action {

  value: string | React.ReactNode;
  timeout: number;
  constructor(value: string | React.ReactNode, timeout: number, ...props: ActionArgs) {
    super(...props)
    this.value = value;
    this.timeout = timeout;
  }

  perform() {
    const { value, timeout, onChange, getCurrentState, story } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      const state = getCurrentState();

      if (story.isInterrupted) {
        return resolve(false);
      }

      onChange(
        interviewReducers.addMessage(state, value),
        () => resolve(true)
      );
    })
  }

}

export { Message };
