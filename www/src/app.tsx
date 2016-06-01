import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import VisibleCounter from './components/counter.tsx'
import reducer from './reducers/index.tsx'

let store = createStore(reducer);

render(
  <Provider store={store}>
      <VisibleCounter />
  </Provider>,
  document.getElementById("test")
);
