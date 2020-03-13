import {combineReducers} from 'redux';
import {connectRouter,RouterState} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {reducer as client,State as clientState} from './client';
import {reducer as server,State as serverState} from './server';

const history = createBrowserHistory();

export interface GlobalState {
    router:RouterState;
    client:clientState;
    server:serverState;
}
export default combineReducers({
    router:connectRouter(history),
    client,
    server
})