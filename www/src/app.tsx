import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import VisibleHello from './components/test.tsx'
import reducer from './reducers/index.tsx'

let store = createStore(reducer);

render(
  <Provider store={store}>
      <VisibleHello />
  </Provider>,
  document.getElementById("test")
);
