import { Action } from 'utils';
import { postInterview, PostInterviewState } from 'state';
import { isNumber, isString } from 'lodash'

class RemoveMessage extends Action<string | number, PostInterviewState> {
  perform() {
    const { timeout, value } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (isNumber(value)) {
        postInterview.events.removeMessageByIndex(value);
      }

      if (isString(value)) {
        postInterview.events.removeMessage(value);
      }

      resolve(true);
    })
  }
}

export { RemoveMessage };
