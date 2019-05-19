import { Action } from 'utils';
import { PostInterviewState, postInterview } from 'state';

type Value = (state: PostInterviewState) => Action<any, PostInterviewState>[];

class Branching extends Action<Value, PostInterviewState> {
  perform() {
    const {  timeout, story } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (story.isInterrupted) {
        return resolve(false);
      }

      resolve(this.performNow());
    })
  }

  performNow() {
    const { value, story } = this;
    const state = postInterview.store.getState();

    story.addActions(
      value(state),
    );

    story.proceed();
    return true;
  }

  _index() {
    const { story, actionId } = this;
    return story.actions.findIndex((value) => value.actionId === actionId)
  }

}

export { Branching };
