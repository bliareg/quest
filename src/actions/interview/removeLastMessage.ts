import { Action } from 'utils';
import { interview, InterviewState } from 'state';

class RemoveLastMessage extends Action<any, InterviewState> {
  perform() {
    const { timeout } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      const messagesCount = this.story.store.getState().messages.length;
      interview.events.removeMessageByIndex(messagesCount - 1);
      resolve(true);
    })
  }
}

export { RemoveLastMessage };
