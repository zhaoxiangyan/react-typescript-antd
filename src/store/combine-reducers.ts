import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {RouterState} from 'connected-react-router';
import {reducer as client,State as clientState} from './client';

const history = createBrowserHistory();

export interface GlobalState {
    router:RouterState;
    client:clientState
}
export default combineReducers({
    router:connectRouter(history),
    client
})