import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { SkypeScreen, InterviewScreen } from 'Screens/index';
import { ROUTES } from 'constants/index';

class Routes extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route path={ROUTES.skypeIntroductionScreen} exact component={SkypeScreen} />
        <Route path={ROUTES.chat_interview} exact component={InterviewScreen} />
      </BrowserRouter>
    );
  }
}

export { Routes };
