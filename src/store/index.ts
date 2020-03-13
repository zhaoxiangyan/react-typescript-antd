import { applyMiddleware, createStore,compose } from 'redux'

import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import combineReducers from './combine-reducers'

import promiseMiddleware from './promiseMiddleware';

export const history = createBrowserHistory();
// redux 注入操作

const middleware = [routerMiddleware(history),thunk,promiseMiddleware];

const composeDevtools =  (process.env.NODE_ENV === 'development')?(window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : compose;

// let store = process.env.NODE_ENV === 'development'?(
//     // 开发环境
//     createStore(combineReducers,compose(applyMiddleware(...middleware),window['__REDUX_DEVTOOLS_EXTENSION__']?window['__REDUX_DEVTOOLS_EXTENSION__']():null))
// ):(
//     // 生产环境
//     createStore(combineReducers, applyMiddleware(...middleware))
// )
// // console.log(store.getState());

const store = createStore(combineReducers,composeDevtools(applyMiddleware(...middleware)))


export default store