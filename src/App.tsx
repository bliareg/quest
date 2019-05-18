import * as React from 'react';
import { Routes } from 'routes/index';
import { bindGlobalAppShortcuts } from 'utils';

bindGlobalAppShortcuts();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
