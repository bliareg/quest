import shortid from 'shortid';
import { isFunction } from 'lodash';
import { Reducer, Store as StoreType } from 'types';

class Store<T> implements StoreType<T> {
  state: T;
  subscribers: { [key: string]: Function } = {};
  reducers: { [key: string]: Reducer<T>}

  constructor(generateDefaultState: () => T, reducers: { [key: string]: Reducer<T> }) {
    this.state = generateDefaultState();
    this.reducers = reducers;
  }

  subscribe(callback: Function): string {
    const id = shortid();
    this.subscribers[id] = callback;

    return id;
  }

  unsubscribe(id: string) {
    delete this.subscribers[id];
  }

  notifyUpdate() {
    const subscribers = Object.keys(this.subscribers);

    subscribers.forEach(subscriberKey => {
      const callback = this.subscribers[subscriberKey];
      isFunction(callback) && callback();
    });
  }

  commiteChange(reducerName: string, payload: any) {
    const reducer = this.reducers[reducerName];

    if (!isFunction(reducer)) {
      return;
    }

    this.state = reducer(this.state, payload);
    this.notifyUpdate();
  }
}

export { Store };
