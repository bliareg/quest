import { createDomain } from 'effector'
import { INTERVIEW, INTERVIEW_EVENTS, RESET } from 'constants/index';
import { chat, basicStory, ChatState, BasicStoryState } from 'state';

export type InterviewState = {
  isRegistrationOpen: boolean,
} & BasicStoryState & ChatState

const getDefaultState = (): InterviewState => {
  return {
    ...basicStory.getDefaultState(),
    ...chat.getDefaultState(),
    isRegistrationOpen: false,
  }
}

const {
  changeRegistrationModal,
} = INTERVIEW_EVENTS;

const interviewDomain = createDomain(INTERVIEW);

const store = interviewDomain.store(getDefaultState())

const events = {
  changeRegistrationModal: interviewDomain.event<boolean>(changeRegistrationModal),
  ...basicStory.addEvents(interviewDomain, store),
  ...chat.addEvents(interviewDomain, store),
  reset: interviewDomain.event<any>(RESET)
};

store.on(
  events.changeRegistrationModal,
  (state, value) => ({...state, isRegistrationOpen: value})
);

store.reset(events.reset);

const interview = {
  store,
  events
}

export { interview }
