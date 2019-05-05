import { createDomain } from 'effector'
import { POST_INTERVIEW, RESET } from 'constants/index';
import { chat, basicStory, ChatState, BasicStoryState } from 'state';

export type PostInterviewState = {} & BasicStoryState & ChatState

const getDefaultState = (): PostInterviewState => {
  return {
    ...basicStory.getDefaultState(),
    ...chat.getDefaultState(),
  }
}

const postInterviewDomain = createDomain(POST_INTERVIEW);

const store = postInterviewDomain.store(getDefaultState())

const events = {
  ...basicStory.addEvents(postInterviewDomain, store),
  ...chat.addEvents(postInterviewDomain, store),
  reset: postInterviewDomain.event<any>(RESET)
};

store.reset(events.reset);

const postInterview = {
  store,
  events
}

export { postInterview }
