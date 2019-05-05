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
        { skip: '', call: ROUTES.chatInterview }
      } />
    );
  }
}

class SkypeFinal extends React.Component<Props> {
  render() {
    return (
      <SkypeComponent links={
        { skip: '', call: ROUTES.chatPostInterview }
      } />
    );
  }
}

const SkypeIntroductionScreen = withRouter(SkypeIntroduction);
const SkypeFinalScreen = withRouter(SkypeFinal);

export { SkypeIntroductionScreen, SkypeFinalScreen };
