import * as React from 'react';
import { Link } from 'react-router-dom';
import { t } from 'utils';

type Props = {
  name: string,
  redirectTo: string
};

class SkypeCall extends React.Component<Props> {

  render() {
    const { name, redirectTo } = this.props;

    return (
      <div className="call">
        <Link to={redirectTo}>
          {t('components.SkypeCall.callTo')} {name}
        </Link>
      </div>
    )
  }
}

export { SkypeCall }
