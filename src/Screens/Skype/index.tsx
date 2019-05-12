import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
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
        name="Karl Markovich"
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
        name="Karl Markovich"
      />
    );
  }
}

const SkypeIntroductionScreen = withRouter(SkypeIntroduction);
const SkypeFinalScreen = withRouter(SkypeFinal);

export { SkypeIntroductionScreen, SkypeFinalScreen };
