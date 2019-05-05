import { Action } from 'utils';
import { InterviewState, interview } from 'state';

type Value = (state: InterviewState) => Action<any, InterviewState>[];

class Branching extends Action<Value, InterviewState> {
  perform() {
    const { value, timeout, story } = this;
    return this._timeoutPromise(timeout, (resolve) => {

      if (story.isInterrupted) {
        return resolve(false);
      }

      const state = interview.store.getState();

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
