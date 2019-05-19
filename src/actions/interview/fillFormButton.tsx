import * as React from 'react';

import { Action } from 'utils';
import { Message } from './message';
import { InterviewState, interview } from 'state';
import { INTERVIEW_DECISIONS } from 'constants/index';
const { cannotWork, canWork } = INTERVIEW_DECISIONS;

class FillFormButton extends Action<boolean, InterviewState> {
  async perform() {
    const { timeout, story } = this;

    if (story.isInterrupted) {
      return false;
    }

    await (new Message(
      this._fillFormButton(),
      timeout,
      story,
    )).perform();

    return false;
  }

  performNow() {
    return false;
  }

  _openForm = () => {
    if (this.story.isAnyDecistion(cannotWork, canWork)) {
      return;
    }

    interview.events.changeRegistrationModal(true)
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
