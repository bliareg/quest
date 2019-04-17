import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { ROUTES } from 'constants/index';
import { PlayVideo } from 'components/PlayVideo/index'
// import * as Video from 'assets/video/sample1.mp4';
import Video from '../../assets/video/sample1.mp4';


type RouteProps = RouteComponentProps<{}>;
type Props = {} & RouteProps;

class Cartoon1 extends React.Component<Props> {
  onActionEnd = () => {
    this.props.history.push(ROUTES.cartoon2);
  }
  render() {
    return (
      <div>
        <PlayVideo source={Video} onEnd={this.onActionEnd} />
        <Link to={ROUTES.cartoon2}>cartoon2</Link>
      </div>
    );
  }
}

const Cartoon1Screen = withRouter(Cartoon1);

export { Cartoon1Screen };
