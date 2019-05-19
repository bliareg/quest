import { Action } from 'utils';
import { postInterview, PostInterviewState } from 'state';
import { isNumber, isString } from 'lodash'

class RemoveMessage extends Action<string | number, PostInterviewState> {
  perform() {
    const { timeout } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      resolve(this.performNow());
    })
  }

  performNow() {
    const { value } = this;

    if (isNumber(value)) {
      postInterview.events.removeMessageByIndex(value);
    }

    if (isString(value)) {
      postInterview.events.removeMessage(value);
    }

    return true;
  }
}

export { RemoveMessage };
