import {createReducer} from './types';
import * as type from './action-types';
import api,{RequestUrl} from '@/axios';
import { push } from 'connected-react-router';

function loginSuccess() {
    return (dispatch:any, getState:any) => {
      const {
        server: {
          loginData: { result: loginData },
        },
      } = getState();
  
      // 持久化登陆信息

      dispatch(tokenSave(loginData.token_type+' '+loginData.access_token));
      localStorage.setItem('token', loginData.token_type+' '+loginData.access_token);
      dispatch(push('/home'));
    }
}

// 登录
function login(data:any) {
    return {
        type: type.login,
        payload: api('post',RequestUrl.login,true,data),
        nextAction: loginSuccess(),
    }
}
const tokenSave =(token:string)=>{
    return {
        type:type.tokenSave,
        token
    }
}

export interface State {
    loginData:any;
    loginError:any;
    token:string;
}

export const action = {
    login,
    tokenSave
};


export const reducer = createReducer(
    {
        loginData:{},
        loginError:{},
        token:"",
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
        [type.tokenSave](state,{token}){
            return {
                ...state,
                token
            }
        }
    }
)