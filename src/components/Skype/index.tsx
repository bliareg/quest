import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  links: {
    call: string,
    skip: string
  }
}

class Skype extends React.Component<Props>  {

    render() {
      const { call, skip } = this.props.links;

      return (
        <div>
          <h4>
            Skype
          </h4>
          <Link to={call}>call</Link>
          <Link to={skip}>skip</Link>
        </div>
      )
    }
}

export { Skype };
