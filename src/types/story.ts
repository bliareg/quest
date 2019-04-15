import { Scene } from 'types';

export interface Story {
  scenes: { [key: string]: Scene },
  currentScene: string, // Current scene
  changeScene(id: string): boolean,
}
