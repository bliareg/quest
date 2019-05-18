import Mousetrap from 'mousetrap';
import { history } from 'utils';
import { ROUTES } from 'constants/index';

function restartApp() {
  console.log('RESTARTING')
  const resp1 = window.confirm('Are you sure you wan\t to restart the app.');

  if (!resp1) {
    return;
  }

  const resp2 = window.confirm('All of you\'re data will be lost!');

  if (!resp2) {
    return;
  }

  const resp3 = window.confirm('We do not store any of the data lol.');

  if (!resp3) {
    return;
  }

  const resp4 = window.confirm('I\'m just fucking with you. Ok. this is the last one)');

  if (!resp4) {
    return;
  }

  history.push(ROUTES.skypeIntroductionScreen);
}

function bindGlobalAppShortcuts() {
  Mousetrap.bind('s e q u e n c e r e s t a r t a p p 2 2 1 9', restartApp);
  Mousetrap.bind('r e s t a r t b l e a t', restartApp);
}

export { bindGlobalAppShortcuts };
