import { Action } from 'types';

type Callbacks = {
  afterStart?: Function,
  afterFinish?: Function,
  afterWait?: Function,
  afterProceed?: Function
}

class Story {
  actions: Action[] = [];
  isWaiting: boolean = false;
  isStarted: boolean = false;
  isFinished: boolean = false;
  isInterrupted: boolean = false;
  callbacks: Callbacks = {};
  getCurrentState: Function = () => {};
  onChange: Function  = () => {};

  constructor(
    callbacks: Callbacks,
    getCurrentState: Function,
    onChange: Function
  ) {
    this.callbacks = callbacks;
    this.getCurrentState = getCurrentState;
    this.onChange = onChange;
  }

  start() {
    this.isStarted = true;
    this._step();
    this._callback('afterStart');
  }

  proceed() {
    this.isWaiting = false;
    this._callback('afterProceed')
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

  setActions(actions: Action[]) {
    this.actions = actions;
  }

  async _step() {
    const step = this.actions[0];

    if (!step) {
      return this.finish();
    }

    const isWaiting = !await step.perform()
    this.actions.shift();

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
}

export { Story };
