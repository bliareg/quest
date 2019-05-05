import { Action } from 'utils';
import { PostInterviewState, postInterview } from 'state';

type Value = (state: PostInterviewState) => Action<any, PostInterviewState>[];

class Branching extends Action<Value, PostInterviewState> {
  perform() {
    const { value, timeout, story } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (story.isInterrupted) {
        return resolve(false);
      }

      const state = postInterview.store.getState();

      story.addActions(
        value(state),
      );

      story.proceed();
      resolve(true);
    })
  }

  _index() {
    const { story, actionId } = this;
    return story.actions.findIndex((value) => value.actionId === actionId)
  }

}

export { Branching };
