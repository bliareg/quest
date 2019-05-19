import { Story } from 'utils';

export interface Action<T> {
  story: Story<T>;
  actionId: string;
  perform(): Promise<boolean>;
  interceptPerform(): void;
};

export type ActionArgs<T> = [
  any,
  number,
  Story<T>
];
