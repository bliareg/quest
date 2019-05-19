import { Action } from 'utils';
import { interview, InterviewState } from 'state';
import { isNumber, isString } from 'lodash'

class RemoveMessage extends Action<string | number, InterviewState> {
  perform() {
    const { timeout } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      resolve(this.performNow());
    })
  }

  performNow() {
    const { value } = this;

    if (isNumber(value)) {
      interview.events.removeMessageByIndex(value);
    }

    if (isString(value)) {
      interview.events.removeMessage(value);
    }

    return true;
  }
}

export { RemoveMessage };
