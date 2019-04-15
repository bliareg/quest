import { Scene, Story } from 'types';

export interface Action {
  id: string,
  scene: Scene;
  perform(): boolean;
};
