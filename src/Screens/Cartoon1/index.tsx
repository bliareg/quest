import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from 'constants/index';

type RouteProps = RouteComponentProps<{}>;
type Props = {} & RouteProps;

class Cartoon1 extends React.Component<Props> {
  render() {
    return (
      <div>
        SKYPE
        <Link to={ROUTES.skypeIntroductionScreen}>skype</Link>
        <Link to={ROUTES.cartoon2}>cartoon2</Link>
      </div>
    );
  }
}

const Cartoon1Screen = withRouter(Cartoon1);

export { Cartoon1Screen };
