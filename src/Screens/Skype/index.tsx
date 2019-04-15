import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from 'constants/index';

type RouteProps = RouteComponentProps<{}>;
type Props = {} & RouteProps;

class Skype extends React.Component<Props> {
  render() {
    return (
      <div>
        SKYPE
        <Link to={ROUTES.cartoon1}>cartoon1</Link>
        <Link to={ROUTES.cartoon2}>cartoon2</Link>
      </div>
    );
  }
}

const SkypeScreen = withRouter(Skype);

export { SkypeScreen };
