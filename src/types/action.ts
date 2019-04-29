import { Story } from 'utils';

export interface Action {
  onChange?: Function;
  getCurrentState?: Function;
  story?: Story;

  perform(): Promise<boolean>
};

export type ActionArgs = [Story, Function, Function];
