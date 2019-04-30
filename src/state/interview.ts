import * as React from 'react';

export type InterviewState = {
  animation: {
    left: string,
    right: string
  },
  messages: Array<React.ReactNode | string>,
  isRegistrationOpen: boolean
}

const getInterviewDefaultState = (): InterviewState => {
  return {
    animation: {
      left: '',
      right: ''
    },
    messages: [],
    isRegistrationOpen: false
  }
}

const interviewReducers = {
  changeAnimation: (currentState: InterviewState, payload: Object): InterviewState => {
    return { ...currentState, animation: { ...currentState.animation, ...payload } }
  },

  addMessage: (currentState: InterviewState, payload: string | React.ReactNode): InterviewState => {
    return { ...currentState, messages: [...currentState.messages, payload] }
  },

  changeRegistrationModal: (currentState: InterviewState, payload: boolean): InterviewState => {
    return { ...currentState, isRegistrationOpen: payload }
  },
}

export {
  getInterviewDefaultState,
  interviewReducers
};
