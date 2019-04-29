import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { SkypeScreen, Cartoon1Screen, Cartoon2Screen, ChatScreen } from 'Screens/index';
import { ROUTES } from 'constants/index';

class Routes extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Route path={ROUTES.skypeIntroductionScreen} exact component={ChatScreen} />
        <Route path={ROUTES.cartoon1} component={Cartoon1Screen} />
        <Route path={ROUTES.cartoon2} component={Cartoon2Screen} />
      </BrowserRouter>
    );
  }
}

export { Routes };
