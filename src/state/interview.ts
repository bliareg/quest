import * as React from 'react';
import { createDomain, createStore } from 'effector'
import { INTERVIEW, INTERVIEW_EVENTS, RESET } from 'constants/index';

export type InterviewState = {
  animation: {
    left: string,
    right: string
  },
  messages: Array<React.ReactNode | string>,
  isRegistrationOpen: boolean,
  decisions: string[]
}

const getDefaultState = (): InterviewState => {
  return {
    animation: {
      left: '',
      right: ''
    },
    messages: [],
    isRegistrationOpen: false,
    decisions: []
  }
}


const { changeAnimation, addMessage, changeRegistrationModal, addDecision } = INTERVIEW_EVENTS;

const interviewDomain = createDomain(INTERVIEW);

const events = {
  changeAnimation: interviewDomain.event<Object>(changeAnimation),
  addMessage: interviewDomain.event<string | React.ReactNode>(addMessage),
  changeRegistrationModal: interviewDomain.event<boolean>(changeRegistrationModal),
  addDecision: interviewDomain.event<any>(addDecision),
  reset: interviewDomain.event<any>(RESET)
};

const store = interviewDomain.store(getDefaultState())

store.on(
  events.changeAnimation,
  (state, change) => ({...state, animation: {...state.animation, ...change }})
);

store.on(
  events.addMessage,
  (state, message) => ({...state, messages: [...state.messages, message]})
);

store.on(
  events.changeRegistrationModal,
  (state, value) => ({...state, isRegistrationOpen: value})
);

store.on(
  events.addDecision,
  (state, value) => ({...state, decisions: [...state.decisions, value]})
);

store.reset(events.reset);

const interview = {
  store,
  events
}

export { interview }
