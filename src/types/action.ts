import { Story } from 'utils';

export interface Action<T> {
  onChange?: (state: T, callback?: Function) => void;
  getCurrentState?: () => T;
  story?: Story;

  perform(): Promise<boolean>
};

export type ActionArgs<T> = [
  Story,
  () => T,
  (state: T, callback?: Function) => void
];
