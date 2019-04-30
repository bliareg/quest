import * as React from 'react';

import { Action } from 'utils';
import { ActionArgs } from 'types';
import { Message } from './message';
import { InterviewState, interviewReducers } from 'state';

class FillFormButton extends Action<InterviewState> {

  value: string | React.ReactNode;
  timeout: number;
  constructor(timeout: number, ...props: ActionArgs<InterviewState>) {
    super(...props)
    this.timeout = timeout;
  }

  async perform() {
    const { timeout, getCurrentState, onChange, story } = this;

    await (new Message(
      this._fillFormButton(),
      timeout,
      story,
      getCurrentState,
      onChange
    )).perform();

    return false;
  }

  _openForm = () => {
    const { onChange, getCurrentState } = this;
    const state = getCurrentState();

    onChange(
      interviewReducers.changeRegistrationModal(
        state,
        true
      )
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
