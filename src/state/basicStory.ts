import { BASIC_STORY_EVENTS } from 'constants/index';
import { Domain, Store } from 'effector';

export type BasicStoryState = {
  decisions: string[]
}

const getDefaultState = (): BasicStoryState => {
  return {
    decisions: []
  }
};

const {
  addDecision,
} = BASIC_STORY_EVENTS;

const addEvents = (domain: Domain, store: Store<BasicStoryState>) => {
  const events = {
    addDecision: domain.event<any>(addDecision),
  };

  store.on(
    events.addDecision,
    (state, value) => ({...state, decisions: [...state.decisions, value]})
  );

  return events;
};

const basicStory = {
  addEvents,
  getDefaultState
};

export { basicStory }
