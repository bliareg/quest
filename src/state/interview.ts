import * as React from 'react';
import { Store } from 'utils';

export type InterviewState = {
  animation: {
    left: string,
    right: string
  },
  messages: Array<React.ReactNode | string>,
  isRegistrationOpen: boolean
}

const getDefaultState = (): InterviewState => {
  return {
    animation: {
      left: '',
      right: ''
    },
    messages: [],
    isRegistrationOpen: false
  }
}

const reducers = {
  changeAnimation: 'changeAnimation',
  addMessage: 'addMessage',
  changeRegistrationModal: 'changeRegistrationModal'
};

const interviewReducers = {
  [reducers.changeAnimation]: (currentState: InterviewState, payload: Object): InterviewState => {
    return { ...currentState, animation: { ...currentState.animation, ...payload } }
  },

  [reducers.addMessage]: (currentState: InterviewState, payload: string | React.ReactNode): InterviewState => {
    return { ...currentState, messages: [...currentState.messages, payload] }
  },

  [reducers.changeRegistrationModal]: (currentState: InterviewState, payload: boolean): InterviewState => {
    return { ...currentState, isRegistrationOpen: payload }
  },
}

const getStore = () => (
  new Store<InterviewState>(getDefaultState, interviewReducers)
);

const interview = {
  getDefaultState,
  getStore,
  reducers
};

export {
  interview,
};
