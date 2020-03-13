import {combineReducers} from 'redux';
import {connectRouter,RouterState} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {reducer as client,State as clientState} from './client';
import {reducer as server} from './server';

const history = createBrowserHistory();

export interface GlobalState {
    router:RouterState;
    client:clientState;
    server:any
}
export default combineReducers({
    router:connectRouter(history),
    client,
    server
})