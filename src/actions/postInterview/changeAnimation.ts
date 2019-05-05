import { Action } from 'utils';
import { postInterview, PostInterviewState } from 'state';

class ChangeAnimation extends Action<Object, PostInterviewState> {
  perform() {
    const {  timeout, story, value } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (story.isInterrupted) {
        return resolve(false);
      }

      postInterview.events.changeAnimation(value);

      resolve(true);
    });
  }

}

export { ChangeAnimation };
