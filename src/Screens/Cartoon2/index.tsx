import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from 'constants/index';

type RouteProps = RouteComponentProps<{}>;
type Props = {} & RouteProps;

class Cartoon2 extends React.Component<Props> {
  render() {
    return (
      <div>
        SKYPE
        <Link to={ROUTES.cartoon1}>cartoon1</Link>
        <Link to={ROUTES.skypeIntroductionScreen}>skype</Link>
      </div>
    );
  }
}

const Cartoon2Screen = withRouter(Cartoon2);

export { Cartoon2Screen };
