import * as React from 'react';
import { Route, Router } from 'react-router-dom'
import {
  SkypeIntroductionScreen,
  SkypeFinalScreen,
  SkypeCallScreen,
  InterviewScreen,
  PostInterviewScreen,
  LoginScreen,
  Final1Screen,
  Final2Screen
} from 'Screens/index';

import { ROUTES } from 'constants/index';
import { history } from 'utils';

class Routes extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Route path={ROUTES.skypeIntroductionScreen} exact component={SkypeIntroductionScreen} />
        <Route path={ROUTES.skypeFinalScreen} exact component={SkypeFinalScreen} />
        <Route path={ROUTES.skypeCallScreen} exact component={SkypeCallScreen} />
        <Route path={ROUTES.chatInterview} exact component={InterviewScreen} />
        <Route path={ROUTES.chatPostInterview} exact component={PostInterviewScreen} />
        <Route path={ROUTES.login} exact component={LoginScreen} />
        <Route path={ROUTES.finalSuccess1} exact component={Final1Screen} />
        <Route path={ROUTES.finalFail1} exact component={Final2Screen} />
      </Router>
    );
  }
}

export { Routes };
