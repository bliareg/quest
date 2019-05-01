import { Action } from 'utils';
import { interview, InterviewState } from 'state';

class ChangeAnimation extends Action<Object, InterviewState> {
  perform() {
    const {  timeout, story, value } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (story.isInterrupted) {
        return resolve(false);
      }

      interview.events.changeAnimation(value);

      resolve(true);
    });
  }

}

export { ChangeAnimation };
