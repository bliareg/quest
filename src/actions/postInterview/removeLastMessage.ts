import { Action } from 'utils';
import { postInterview, PostInterviewState } from 'state';

class RemoveLastMessage extends Action<any, PostInterviewState> {
  perform() {
    const { timeout } = this;
    return this._timeoutPromise(timeout, (resolve) => {
      resolve(this.performNow());
    })
  }

  performNow() {
    const messagesCount = this.story.store.getState().messages.length;
    postInterview.events.removeMessageByIndex(messagesCount - 1);
    return true;
  }
}

export { RemoveLastMessage };
