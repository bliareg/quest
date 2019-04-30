import { Action } from 'utils';
import { interview, InterviewState } from 'state';

class ChangeAnimation extends Action<InterviewState> {

  value: Object = {};
  timeout: number = 0;

  perform() {
    const { value, timeout, story } = this;
    const store = story.store;

    return this._timeoutPromise(timeout, (resolve) => {

      if (story.isInterrupted) {
        return resolve(false);
      }

      store.commiteChange(
        interview.reducers.changeAnimation,
        value
      );

      resolve(true);
    });
  }

}

export { ChangeAnimation };
