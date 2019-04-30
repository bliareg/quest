import * as React from 'react';

import { Action } from 'utils';
import { Message } from './message';
import { InterviewState, interview } from 'state';

class FillFormButton extends Action<InterviewState> {

  value: null = null;
  timeout: number = 0;

  async perform() {
    const { timeout, story } = this;

    await (new Message(
      this._fillFormButton(),
      timeout,
      story,
    )).perform();

    return false;
  }

  _openForm = () => {
    const { story } = this;
    const store = story.store;

    store.commiteChange(
      interview.reducers.changeRegistrationModal,
      true
    );
  }

  _fillFormButton = () => {
    return (
      <button onClick={this._openForm}>
        Заполнить анкету
      </button>
    )
  }

}

export { FillFormButton };
