import shortid from 'shortid';
import { Action } from 'utils';
import { postInterview, PostInterviewState } from 'state';
import { ActionArgs } from 'types';

class Message extends Action<string | React.ReactNode, PostInterviewState> {
  id: string;

  constructor(...props: ActionArgs<PostInterviewState>) {
    super(...props)
    this.id = shortid();
  }

  perform() {
    const { timeout, story } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (story.isInterrupted) {
        return resolve(false);
      }

      postInterview.events.addMessage(this.buildMessage())
      resolve(true);
    })
  }

  buildMessage() {
    const { value, id } = this;
    return { value, id }
  }

  getId() {
    return this.id;
  }
}

export { Message };
