import { Action, history } from 'utils';
import { PostInterviewState } from 'state';

class Navigate extends Action<string, PostInterviewState> {
  perform() {
    const { timeout } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      resolve(this.performNow());
    })
  }

  performNow() {
    const { value } = this;
    history.push(value);
    return true;
  }
}

export { Navigate };
