import { Scene as IScene, Story } from 'types';
import { SKYPE_CALL, SKYPE_CALL_ACTIONS } from 'constants/';

class Scene implements IScene {

  actions = {};

  constructor(public id: string, public story: Story, ...actions: Scene[]) {
    const sortedActions = actions.reduce((acc, el) => {
      return { ...acc, [el.id]: el }
    }, {});

    this.actions = actions;
  }

  perform(id: string): boolean {
    const action = this.actions[id];
    if (!action) {
      return false;
    }

    return action();
  }
}

export { Scene };
