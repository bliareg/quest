import * as React from 'react';
import { Route, Router } from 'react-router-dom'
import {
  SkypeIntroductionScreen,
  SkypeFinalScreen,
  InterviewScreen,
  PostInterviewScreen,
  LoginScreen
} from 'Screens/index';

import { ROUTES } from 'constants/index';
import { history } from 'utils';

class Routes extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Route path={ROUTES.skypeIntroductionScreen} exact component={SkypeIntroductionScreen} />
        <Route path={ROUTES.skypeFinalScreen} exact component={SkypeFinalScreen} />
        <Route path={ROUTES.chatInterview} exact component={InterviewScreen} />
        <Route path={ROUTES.chatPostInterview} exact component={PostInterviewScreen} />
        <Route path={ROUTES.login} exact component={LoginScreen} />
      </Router>
    );
  }
}

export { Routes };
