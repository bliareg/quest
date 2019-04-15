import { Action, Story } from 'types';

export interface Scene {
  id: string;
  story: Story;

  actions: {
    [key: string]: Action,
  };

  perform(id: string): boolean
}
