import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore(reducer,
      window._REDUX_DEVTOOLS_EXTENSION_ && Window._redux_devtools_extension_());

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);









