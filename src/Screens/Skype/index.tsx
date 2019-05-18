import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { t } from 'utils';
import { ROUTES } from 'constants/index';
import { Skype as SkypeComponent } from 'components/Skype/index';

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
  render() {
    return (
      <SkypeComponent links={
        { skip: ROUTES.login, call: ROUTES.chatPostInterview }
      }
        name={t('Screens.Skype.SkypeIntroduction.name')}
      />
    );
  }
}

const SkypeIntroductionScreen = withRouter(SkypeIntroduction);
const SkypeFinalScreen = withRouter(SkypeFinal);

export { SkypeIntroductionScreen, SkypeFinalScreen };
