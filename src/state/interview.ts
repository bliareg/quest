import { createDomain } from 'effector'
import { INTERVIEW, INTERVIEW_EVENTS, RESET } from 'constants/index';
import { Message } from 'types';

export type InterviewState = {
  animation: {
    left: string,
    right: string
  },
  messages: Array<Message>,
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


const {
  changeAnimation,
  addMessage,
  changeRegistrationModal,
  addDecision,
  removeMessage,
  removeMessageByIndex
} = INTERVIEW_EVENTS;

const interviewDomain = createDomain(INTERVIEW);

const events = {
  changeAnimation: interviewDomain.event<Object>(changeAnimation),
  addMessage: interviewDomain.event<Message>(addMessage),
  removeMessage: interviewDomain.event<string>(removeMessage),
  removeMessageByIndex: interviewDomain.event<number>(removeMessageByIndex),
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

store.on(
  events.removeMessage,
  (state, id) => ({...state, messages: state.messages.filter((value) => (
    value.id === id
  )) })
);

store.on(
  events.removeMessageByIndex,
  (state, index) => ({
    ...state,
    messages: (() => {
      const messages = [...state.messages];
      messages.splice(index, 1);

      return messages;
    })()
  })
);

store.reset(events.reset);

const interview = {
  store,
  events
}

export { interview }
