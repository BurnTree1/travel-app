import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

type RootReducerType = typeof reducers;
export type AppRootReducer = ReturnType<RootReducerType>;

(window as any).store = store;
export default store;
