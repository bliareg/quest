import { Action } from 'utils';
import { postInterview, PostInterviewState } from 'state';

class RemoveLastMessage extends Action<any, PostInterviewState> {
  perform() {
    const { timeout } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      const messagesCount = this.story.store.getState().messages.length;
      postInterview.events.removeMessageByIndex(messagesCount - 1);
      resolve(true);
    })
  }
}

export { RemoveLastMessage };
