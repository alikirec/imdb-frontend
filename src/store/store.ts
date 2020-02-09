import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const routerMiddleware = createRouterMiddleware(history);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer(history),
  {},
  composeEnhancers(applyMiddleware(thunk, routerMiddleware))
);

export default store;
