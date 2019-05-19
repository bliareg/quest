import { Action } from 'utils';
import { interview, InterviewState } from 'state';

class ChangeAnimation extends Action<Object, InterviewState> {
  perform() {
    const {  timeout, story } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (story.isInterrupted) {
        return resolve(false);
      }

      resolve(this.performNow());
    });
  }

  performNow() {
    const { value } = this;
    interview.events.changeAnimation(value);
    return true;
  }

}

export { ChangeAnimation };
