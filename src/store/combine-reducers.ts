import {combineReducers} from 'redux';
import {connectRouter,RouterState} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {reducer as client,State as clientState} from './client';
import {reducer as server,State as serverState} from './server';
import {reducer as user,State as userState} from '@/views/home/user/store';
import {reducer as customer,State as customerState} from '@/views/home/customer/store';
import {reducer as account,State as accountState} from '@/views/home/account/store';
import {reducer as wallet,State as walletState} from '@/views/home/wallet/store';
import {reducer as task,State as taskState} from '@/views/home/task/store';

const history = createBrowserHistory();

export interface GlobalState {
    router:RouterState;
    client:clientState;
    server:serverState;
    user:userState;
    customer:customerState;
    account:accountState;
    wallet:walletState;
    task:taskState;
}
export default combineReducers({
    router:connectRouter(history),
    client,
    server,
    user,
    customer,
    account,
    wallet,
    task
})