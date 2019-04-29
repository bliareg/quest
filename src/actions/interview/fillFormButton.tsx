import * as React from 'react';

import { Action } from 'utils';
import { ActionArgs } from 'types';
import { Message } from './message';

class FillFormButton extends Action {

  value: string | React.ReactNode;
  timeout: number;
  constructor(timeout: number, ...props: ActionArgs) {
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

  _fillFormButton = () => {
    return (
      <button>
        Заполнить анкету
      </button>
    )
  }

}

export { FillFormButton };
