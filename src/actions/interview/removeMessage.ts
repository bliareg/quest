import { Action } from 'utils';
import { interview, InterviewState } from 'state';
import { isNumber, isString } from 'lodash'

class RemoveMessage extends Action<string | number, InterviewState> {
  perform() {
    const { timeout, value } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (isNumber(value)) {
        interview.events.removeMessageByIndex(value);
      }

      if (isString(value)) {
        interview.events.removeMessage(value);
      }

      resolve(true);
    })
  }
}

export { RemoveMessage };
