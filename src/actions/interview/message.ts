import { Action } from 'utils';
import { interview, InterviewState } from 'state';

class Message extends Action<string | React.ReactNode, InterviewState> {
  perform() {
    const { value, timeout, story } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (story.isInterrupted) {
        return resolve(false);
      }

      interview.events.addMessage(value)
      resolve(true);
    })
  }

}

export { Message };
