import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from 'constants/index';
import { Skype as SkypeComponent } from 'components/Skype/index';

type RouteProps = RouteComponentProps<{}>;
type Props = {} & RouteProps;

class Skype extends React.Component<Props> {
  render() {
    return (
      <SkypeComponent links={{ skip: ROUTES.cartoon1, call: ROUTES.cartoon2 }} />
    );
  }
}

const SkypeScreen = withRouter(Skype);

export { SkypeScreen };
