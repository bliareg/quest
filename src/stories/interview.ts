import { Story } from 'utils';
import { Action } from 'types';
import { Animation } from 'components/Animation';
import { interviewActions } from 'actions';
import { InterviewState, interview } from 'state';
import { INTERVIEW_DECISIONS, ROUTES } from 'constants/index';
const { ChangeAnimation, Message, FillFormButton, Branching, RemoveLastMessage, Navigate } = interviewActions;

const getChatInterviewStory = (
  callbacks: Object,
): Story<InterviewState> => {
  const store = interview.store;
  const story = new Story<InterviewState>(callbacks, store);
  const actions = buildActions(story);

  story.setActions(actions);

  return story;
}

const buildActions = (story: Story<InterviewState>): Action<InterviewState>[] => {
  return [
    new ChangeAnimation({ left: Animation.types.boss }, 0, story),
    new Message('Здравствуйте!', 800, story),
    new Message('Мы рады приветствовать Вас в нашем офисе.', 1500, story),
    new Message('Итак, вы хотите устроиться на работу в нашу компанию?', 1500, story),
    new Message('Для начала я предлагаю вам заполнить нашу анкету…', 1500, story),
    new FillFormButton(null, 1500, story),
    new RemoveLastMessage(null, 0, story),

    new Branching((state: InterviewState) => {
      if (story.isDecision(INTERVIEW_DECISIONS.canWork)) {
        return [
          new Message('Поздравляю.', 800, story),
          new Message('Вы нам подходите.', 1500, story),
          new Message('Думаю, что 1 миллион долларов в год вас устроит.', 1500, story),
          new Message('Подпишите все необходимые документы у моей секретарши', 1500, story),
          new ChangeAnimation({ right: Animation.types.secretary }, 1500, story),
          new Message('Секретарша: Слушаю, Михаил Брилиантович', 50, story),
          new Message('Шеф: Оформите наших гостей необходимым образом. Они нам подходят', 1500, story),
          new Message('Секретарша: Конечно, Михаил Брилиантович. Сейчас сделаю, Михаил Брилиантович', 1500, story),
          new ChangeAnimation({ right: '' }, 1500, story),
          new Message('Итак, надеюсь на плодотворное сотрудничество (за 1 миллион то!).', 50, story),
          new Message('До свидания.', 1500, story),

          new Navigate(ROUTES.skypeFinalScreen, 5000, story)
        ]
      }

      return [];
    }, 0, story),

    new Branching((state: InterviewState) => {
      if (story.isDecision(INTERVIEW_DECISIONS.cannotWork)) {
        return [
          new Message('К сожалению вы нам не подходите.', 800, story),
          new Message('Думаю, что 1 миллион долларов в год мы предложим кому-нибудь другому.', 1500, story),
          new Message('Моя секретарша вас проводит.', 1500, story),
          new ChangeAnimation({ right: Animation.types.secretary }, 1500, story),
          new Message('Секретарша: Слушаю, Михаил Брилиантович', 50, story),
          new Message('Шеф: Проводите наших гостей. Они нам не подходят', 1500, story),
          new Message('Секретарша: Конечно, Михаил Брилиантович. Сейчас сделаю, Михаил Брилиантович', 50, story),
          new ChangeAnimation({ right: '' }, 1500, story),
          new Message('Ну что ж, спасибо за потраченное время. Мы продолжим поиски необходимых нам сотрудников (за 1 миллион то!)', 1500, story),
          new Message('До свидания', 1500, story),

          new Navigate(ROUTES.finalFail1, 5000, story)
        ]
      }

      return [];
    }, 0, story),
  ]
}

export { getChatInterviewStory };
