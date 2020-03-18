import * as type from '@/store/action-types';
import api,{RequestUrl} from '@/axios';
import {createReducer,PageListParams,PageListResult,TypeRequestResult} from '@/store/types';

// 客户列表查询参数
const updateAccountListParams=(params:any)=>({
    type:type.updateAccountListParams,
    params
})
// 获取客户列表
const getAccountList=(data:any,nextAction?:any)=>({
    type: type.getAccountList,
    payload: api('get',RequestUrl.getAccountList,false,data),
    nextAction,
})

// 获取客户详情
const getAccountDetail=(data:{id:string})=>({
    type:type.getAccountDetail,
    payload:api('get',RequestUrl.getAccountDetail,false,data),
    nextAction:toggleEditAccountDrawer(true,'update')
})
// 新增客户基本信息
const addAccount=(data: any,nextAction: any)=>({
    type:type.addAccount,
    payload:api('post',RequestUrl.addAccount,true,data),
    nextAction:addAccountSuccess(nextAction)
})
const addAccountSuccess=(nextAction:any)=>(
    (dispatch:any)=>{
        nextAction();
        dispatch(toggleEditAccountDrawer(false,''))
    }
)
// 修改客户基本信息
const updateAccount=(data: any,nextAction: any)=>({
    type:type.updateAccount,
    payload:api('post',RequestUrl.updateAccount,true,data),
    nextAction
})


// 客户详情页参数修改
const toggleEditAccountDrawer=(visible:boolean,editType:string)=>({
    type:type.toggleEditAccountDrawer,
    visible,
    editType,
    // nextAction:
})

export interface State { 
    getAccountListParams:PageListParams,
    getAccountListResult:PageListResult;
    getAccountDetailResult:TypeRequestResult;
    editAccountType:string;
    editAccountDrawerVisible:boolean;
    editAccountDetailResult:TypeRequestResult;
}

export const action = {
    updateAccountListParams,
    getAccountList,
    getAccountDetail,
    toggleEditAccountDrawer,
    addAccount,
    updateAccount,
};

export const reducer = createReducer(
    {
        getAccountListParams:{
            page:1,
            pageSize:10,
            source:'all',
            type:'all',
            keyword_type:'nickname',
            keyword:''
        },
        getAccountListResult:{},
        getAccountDetailResult:{},
        editAccountType:'',
        editAccountDrawerVisible:false,
        editAccountDetailResult:{},
    },
    {
        [type.updateAccountListParams](state,{params}){
            return {
                ...state,
                getAccountListParams:params
            }
        },
        [type.getAccountList](state, {payload} ) {
            return {
              ...state,
              getAccountListResult:payload
            };
        },
        [type.getAccountDetail](state,{payload}){
            return {
                ...state,
                getAccountDetailResult:payload
            }
        },
        [type.toggleEditAccountDrawer](state,{visible,editType}){
            return {
                ...state,
                editAccountDrawerVisible:visible,
                editAccountType:editType
            }
        },
        [type.addAccount](state,{payload}){
            return {
                ...state,
                editAccountDetailResult:payload
            }
        },
        [type.updateAccount](state,{payload}){
            return {
                ...state,
                editAccountDetailResult:payload
            }
        },
    }
)