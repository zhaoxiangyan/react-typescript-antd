import {createReducer} from './types';
import * as type from './action-types';
import {api} from '@/axios'
import { push } from 'connected-react-router';

// 登录
function login(data:any) {
    return (dispatch:any, getState:any) => {
      dispatch({
        type: type.login,
        payload: api('post','login',true,data),
        nextAction: push('/test1'),
      });
    };
}

export interface State {
    loginData:any;
    loginError:any;
}

export const action = {
    login
};


export const reducer = createReducer(
    {
        loginData:{},
        loginError:{}
    },
    {
        [type.login](state, {payload} ) {
            let loginError = {};
            return {
              ...state,
              loginData: { ...payload },
              loginError,
            };
        },
    }
)