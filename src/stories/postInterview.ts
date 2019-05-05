import { Story } from 'utils';
import { Action } from 'types';
import { Animation } from 'components/Animation';
import { postInterviewActions } from 'actions';
import { PostInterviewState, interview } from 'state';
import { ROUTES } from 'constants/index';
const { ChangeAnimation, Message, Navigate } = postInterviewActions;

const getChatPostInterviewStory = (
  callbacks: Object,
): Story<PostInterviewState> => {
  const store = interview.store;
  const story = new Story<PostInterviewState>(callbacks, store);
  const actions = buildActions(story);

  story.setActions(actions);

  return story;
}

const buildActions = (story: Story<PostInterviewState>): Action<PostInterviewState>[] => {
  return [
    new ChangeAnimation({ left: Animation.types.secretary }, 0, story),
    new Message('Ой! Извините!', 800, story),
    new Message('Произошла накладка. Я потеряла ключи от дверей.', 1500, story),
    new Message('Мне очень жаль. Но пожалуйста, не беспокойтесь.', 1500, story),
    new Message('Михаил Брилиантович, который сейчас отдыхает на острове Святой Елены, держит ключ у себя в кабинете.', 1500, story),
    new Message('Правда я не знаю, в каком месте он лежит, но Михаил Брилиантович (скажу вам по секрету – из-за своего склероза) всегда оставляет для себя подсказки.', 1500, story),
    new Message('Надеюсь, вы его найдете, потому что (скажу вам по секрету) Михаил Брилиантович приедет с острова Святой Елены еще не скоро', 1500, story),
    new Navigate(ROUTES.skypeIntroductionScreen, 500, story)
  ]
}

export { getChatPostInterviewStory };
