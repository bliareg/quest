import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { t, history } from 'utils';
import { ROUTES } from 'constants/index';
import { Skype as SkypeComponent } from 'components/Skype/index';
import { SkypeCall as SkypeCallComponent } from 'components/SkypeCall';

type RouteProps = RouteComponentProps<{}>;
type Props = {} & RouteProps;

class SkypeIntroduction extends React.Component<Props> {
  render() {
    return (
      <SkypeComponent links={
        { skip: ROUTES.login, call: ROUTES.chatInterview }
      }
        name={t('Screens.Skype.SkypeIntroduction.name')}
      />
    );
  }
}

class SkypeFinal extends React.Component<Props> {

  componentDidMount() {
    setTimeout(() => {
      history.push(ROUTES.chatPostInterview);
    }, 5000);
  }

  render() {
    return (
      <SkypeComponent links={
        { skip: ROUTES.login }
      }
        name={t('Screens.Skype.SkypeIntroduction.name')}
        outcomingCall
      />
    );
  }
}


class SkypeCall extends React.Component<Props> {
  render() {
    return (
      <SkypeCallComponent
        redirectTo={ROUTES.skypeFinalScreen}
      />
    );
  }
}

const SkypeIntroductionScreen = withRouter(SkypeIntroduction);
const SkypeFinalScreen = withRouter(SkypeFinal);
const SkypeCallScreen = withRouter(SkypeCall);

export { SkypeIntroductionScreen, SkypeFinalScreen, SkypeCallScreen };
