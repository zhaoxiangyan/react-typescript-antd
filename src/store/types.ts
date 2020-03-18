import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import {IntlShape} from 'react-intl';
import {Store} from 'rc-field-form/lib/interface';
import { Location } from 'history';

export interface MyLocation extends Location {
  // query: any;
}

export type MyDispatch = ThunkDispatch<any, any, any>;
export type MyAction = ThunkAction<any, any, any, any>;
export type MyIntl = IntlShape;
export interface ConnectInjectIntlPage {
  dispatch: MyDispatch;
  intl:IntlShape;
};

export type FormFinishProp = Store;

export interface PageListParams {
  page?:number;
  pageSize?:number;
  start?:string;
  end?:string;
  source?:string;
  type?:string;
  keyword_type?:'nickname'|'name'|'mobile'|'email';
  keyword?:string;
  [name:string]:any;
}

export interface PageListResult {
  loading:boolean;
  current:number;
  pageSize:number;
  total:number;
  dataSource:any[];
}

export interface TypeRequestResult {
  loading:boolean;
  result:{ [key: string]: any } | { [key: string]: any }[] | null;
}



export type createReducer = <T>(
    initialState: T,
    handlers: {
      [key: string]: (state: T, actionData?: any) => T;
    },
  ) => (state: T, action: any) => T;
  
  export const createReducer: createReducer = (initialState, handlers) => (
    state = initialState,
    action,
  ) => {
    const handler = handlers[action.type];
    if (handler && handler instanceof Function) {
      return handler(state, action);
    }
    return state;
  };
  
  export type mergeState = <T>(state: T, payload: any, key: string) => T;
  /**
   * 当reducer的状态为对象时，需要通过合并的方式返回一个新的对象才会触发组件更新props
   * 基本的reducer状态合并
   * @param state
   * @param payload
   * @param key
   * @returns {{}}
   */
  export const mergeState: mergeState = (state, payload, key) => {
    return {
      ...state,
      [key]: {
        // ...state[key],
        ...payload,
      },
    };
  };