import { Action } from 'utils';
import { postInterview, PostInterviewState } from 'state';

class ChangeAnimation extends Action<Object, PostInterviewState> {
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
    postInterview.events.changeAnimation(value);
    return true;
  }

}

export { ChangeAnimation };
