import { createStore, compose, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState) {
  const middleware = [
    // createLogger({
    //   collapsed: false,
    //   duration: true,
    //   diff: true,
    // }),
    thunk,
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : format => format, // add support for Redux dev tools),
    ),
  );

  return store;
}
