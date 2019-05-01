import { Store } from 'effector';
import { createStoreConsumer } from 'effector-react';
import * as React from 'react';

function subscribe<T>(store: Store<T>): any {
  return <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P) => {
      const Consumer = createStoreConsumer(store);

      return (
        <Consumer>
          {state => (
            <Component {...props} {...state} />
          )}
        </Consumer>
      );
    }
  }
}

export { subscribe }
