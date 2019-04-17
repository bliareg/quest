import * as React from 'react';

type Props = {
  action: Screen
}

type State = {}

class SkypeScreen extends React.Component<Props & Screen, State>  {
    render() {
      return (
        <div>
          Skype
        </div>
      )
    }
}

export { SkypeScreen };