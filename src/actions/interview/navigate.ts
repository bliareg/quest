import { Action, history } from 'utils';
import { InterviewState } from 'state';

class Navigate extends Action<string, InterviewState> {
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
