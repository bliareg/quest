import { Scene, Story as IStory } from 'types';

class Story implements IStory {
  scenes: { [key: string]: Scene } = {};
  currentScene = '';

  constructor(...scenes: Scene[]) {
    const sortedScenes = scenes.reduce((acc, el) => {
      return { ...acc, [el.id]: el }
    }, {});

    this.scenes = sortedScenes;
  }

  changeScene(id: string): boolean {
    const selectedScene = this.scenes[id];

    if (!selectedScene) {
      return false;
    }

    this.currentScene = selectedScene.id;
    return true;
  }

}

export { Story };
