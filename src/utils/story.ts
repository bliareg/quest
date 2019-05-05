import { Store } from 'effector';
import { Action } from 'types';

type Callbacks = {
  afterStart?: Function,
  afterFinish?: Function,
  afterWait?: Function,
  afterProceed?: Function
}

class Story<T = { decisions: string[] }> {
  actions: Action<T>[] = [];
  isWaiting: boolean = false;
  isFinished: boolean = false;
  isStarted: boolean = false;
  isInterrupted: boolean = false;
  callbacks: Callbacks = {};
  store: Store<T>

  constructor(
    callbacks: Callbacks,
    store: Store<T>
  ) {
    this.callbacks = callbacks;
    this.store = store;
  }

  start() {
    this.isStarted = true;
    this._step();
    this._callback('afterStart');
  }

  proceed() {
    if (!this.isWaiting) {
      return;
    }

    this.isWaiting = false;
    this._callback('afterProceed')
    this._step();
  }

  wait() {
    this.isWaiting = true;
    this._callback('afterWait');
  }

  finish() {
    this.isFinished = true;
    this._callback('afterFinish');
  }

  interrupt() {
    this.isInterrupted = true;
  }

  setActions(actions: Action<T>[]) {
    this.actions = actions;
  }

  addActions(actions: Action<T>[]) {
    this.actions = [...actions, ...this.actions]
  }

  async _step() {
    const step = this.actions[0];

    if (!step) {
      return this.finish();
    }

    const isWaiting = !await step.perform()
    this.actions = this.actions.filter(value => value.actionId !== step.actionId);

    if (isWaiting) {
      this.wait();
    } else {
      this._step();
    }
  }

  _callback(name: "afterStart" | "afterWait" | "afterFinish" | "afterProceed") {
    const callback = this.callbacks[name];
    callback && callback();
  }

  isDecision(key: string): boolean {
    const state: any = this.store.getState();
    return !!state.decisions.includes(key);
  }

  isAnyDecistion(...keys: string[]): boolean {
    const state: any = this.store.getState();
    return !!keys.filter(
      value => state.decisions.includes(value)
    ).length
  }
}

export { Story };
