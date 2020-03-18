import * as type from '@/store/action-types';
import api,{RequestUrl} from '@/axios';
import {createReducer,PageListParams,PageListResult,TypeRequestResult} from '@/store/types';

// 客户列表查询参数
const updateCustomerListParams=(params:any)=>({
    type:type.updateCustomerListParams,
    params
})
// 获取客户列表
const getCustomerList=(data:any,nextAction?:any)=>({
    type: type.getCustomerList,
    payload: api('get',RequestUrl.getCustomerList,false,data),
    nextAction,
})

// 获取客户详情
const getCustomerDetail=(data:{id:string})=>({
    type:type.getCustomerDetail,
    payload:api('get',RequestUrl.getCustomerDetail,false,data),
    nextAction:toggleEditCustomerDrawer(true,'update')
})
// 新增客户基本信息
const addCustomer=(data: any,nextAction: any)=>({
    type:type.addCustomer,
    payload:api('post',RequestUrl.addCustomer,true,data),
    nextAction:addCustomerSuccess(nextAction)
})
const addCustomerSuccess=(nextAction:any)=>(
    (dispatch:any)=>{
        nextAction();
        dispatch(toggleEditCustomerDrawer(false,''))
    }
)
// 修改客户基本信息
const updateCustomer=(data: any,nextAction: any)=>({
    type:type.updateCustomer,
    payload:api('post',RequestUrl.updateCustomer,true,data),
    nextAction
})


// 客户详情页参数修改
const toggleEditCustomerDrawer=(visible:boolean,editType:string)=>({
    type:type.toggleEditCustomerDrawer,
    visible,
    editType,
    // nextAction:
})

export interface State { 
    getCustomerListParams:PageListParams,
    getCustomerListResult:PageListResult;
    getCustomerDetailResult:TypeRequestResult;
    editCustomerType:string;
    editCustomerDrawerVisible:boolean;
    editCustomerDetailResult:TypeRequestResult;
}

export const action = {
    updateCustomerListParams,
    getCustomerList,
    getCustomerDetail,
    toggleEditCustomerDrawer,
    addCustomer,
    updateCustomer,
};

export const reducer = createReducer(
    {
        getCustomerListParams:{
            page:1,
            pageSize:10,
            source:'all',
            type:'all',
            keyword_type:'nickname',
            keyword:''
        },
        getCustomerListResult:{},
        getCustomerDetailResult:{},
        editCustomerType:'',
        editCustomerDrawerVisible:false,
        editCustomerDetailResult:{},
    },
    {
        [type.updateCustomerListParams](state,{params}){
            return {
                ...state,
                getCustomerListParams:params
            }
        },
        [type.getCustomerList](state, {payload} ) {
            return {
              ...state,
              getCustomerListResult:payload
            };
        },
        [type.getCustomerDetail](state,{payload}){
            return {
                ...state,
                getCustomerDetailResult:payload
            }
        },
        [type.toggleEditCustomerDrawer](state,{visible,editType}){
            return {
                ...state,
                editCustomerDrawerVisible:visible,
                editCustomerType:editType
            }
        },
        [type.addCustomer](state,{payload}){
            return {
                ...state,
                editCustomerDetailResult:payload
            }
        },
        [type.updateCustomer](state,{payload}){
            return {
                ...state,
                editCustomerDetailResult:payload
            }
        },
    }
)