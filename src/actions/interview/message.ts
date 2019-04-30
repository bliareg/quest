import { Action } from 'utils';
import { interview, InterviewState } from 'state';

class Message extends Action<InterviewState> {

  value: string | React.ReactNode;
  timeout: number = 0;

  perform() {
    const { value, timeout, story } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      const store = story.store;

      if (story.isInterrupted) {
        return resolve(false);
      }

      store.commiteChange(interview.reducers.addMessage, value);
      resolve(true);
    })
  }

}

export { Message };
