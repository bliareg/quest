import * as React from 'react';
import { Route, Router } from 'react-router-dom'
import { SkypeScreen, InterviewScreen } from 'Screens/index';
import { ROUTES } from 'constants/index';
import { history } from 'utils';

class Routes extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Route path={ROUTES.skypeIntroductionScreen} exact component={SkypeScreen} />
        <Route path={ROUTES.chat_interview} exact component={InterviewScreen} />
      </Router>
    );
  }
}

export { Routes };
