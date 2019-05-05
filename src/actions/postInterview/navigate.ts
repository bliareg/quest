import { Action, history } from 'utils';
import { PostInterviewState } from 'state';

class Navigate extends Action<string, PostInterviewState> {
  perform() {
    const { timeout, value } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      history.push(value);
      resolve(true);
    })
  }
}

export { Navigate };
