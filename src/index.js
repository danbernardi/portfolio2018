import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import App from './containers/App';
import store, { history } from './redux/createStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
