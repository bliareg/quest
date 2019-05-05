import { Action, history } from 'utils';
import { InterviewState } from 'state';

class Navigate extends Action<string, InterviewState> {
  perform() {
    const { timeout, value } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      history.push(value);
      resolve(true);
    })
  }
}

export { Navigate };
