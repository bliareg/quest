import * as React from 'react';
import { Link } from 'react-router-dom';
import { skypeLogo } from '../../assets/img/';

type Props = {
  redirectTo: string
};

class SkypeCall extends React.Component<Props> {

  render() {
    const { redirectTo } = this.props;

    return (
        <div className="enter-layout">
            <Link
                className="skype-logo"
                to={redirectTo}
            >
                <img src={skypeLogo} alt="Skype"/>
            </Link>
        </div>
    )
  }
}

export { SkypeCall }
