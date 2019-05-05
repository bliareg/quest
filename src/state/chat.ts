import { Domain, Store } from 'effector'
import { CHAT_EVENTS } from 'constants/index';
import { Message } from 'types';

export type ChatState = {
  animation: {
    left: string,
    right: string
  },
  messages: Array<Message>,
}

const getDefaultState = (): ChatState => {
  return {
    animation: {
      left: '',
      right: ''
    },
    messages: [],
  }
}

const {
  changeAnimation,
  addMessage,
  removeMessage,
  removeMessageByIndex
} = CHAT_EVENTS;

const addEvents = (domain: Domain, store: Store<ChatState>) => {
  const events = {
    changeAnimation: domain.event<Object>(changeAnimation),
    addMessage: domain.event<Message>(addMessage),
    removeMessage: domain.event<string>(removeMessage),
    removeMessageByIndex: domain.event<number>(removeMessageByIndex),
  };

  store.on(
    events.changeAnimation,
    (state, change) => ({...state, animation: {...state.animation, ...change }})
  );

  store.on(
    events.addMessage,
    (state, message) => ({...state, messages: [...state.messages, message]})
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

  return events;
}

const chat = {
  getDefaultState,
  addEvents
}

export { chat }
