import * as type from '@/store/action-types';
import api,{RequestUrl} from '@/axios';
import {createReducer,PageListParams,PageListResult,TypeRequestResult} from '@/store/types';

// 钱包列表查询参数
const updateWalletListParams=(params:any)=>({
    type:type.updateWalletListParams,
    params
})
// 获取钱包列表
const getWalletList=(data:any,nextAction?:any)=>({
    type: type.getWalletList,
    payload: api('get',RequestUrl.getWalletList,false,data),
    nextAction,
})

// 获取钱包详情
const getWalletDetail=(data:{id:string})=>({
    type:type.getWalletDetail,
    payload:api('get',RequestUrl.getWalletDetail,false,data),
    nextAction:toggleEditWalletDrawer(true,'update')
})
// 新增钱包基本信息
const addWallet=(data: any,nextAction: any)=>({
    type:type.addWallet,
    payload:api('post',RequestUrl.addWallet,true,data),
    nextAction:addWalletSuccess(nextAction)
})
const addWalletSuccess=(nextAction:any)=>(
    (dispatch:any)=>{
        nextAction();
        dispatch(toggleEditWalletDrawer(false,''))
    }
)
// 修改钱包基本信息
const updateWallet=(data: any,nextAction: any)=>({
    type:type.updateWallet,
    payload:api('post',RequestUrl.updateWallet,true,data),
    nextAction
})


// 钱包详情页参数修改
const toggleEditWalletDrawer=(visible:boolean,editType:string)=>({
    type:type.toggleEditWalletDrawer,
    visible,
    editType,
    // nextAction:
})

export interface State { 
    getWalletListParams:PageListParams,
    getWalletListResult:PageListResult;
    getWalletDetailResult:TypeRequestResult;
    editWalletType:string;
    editWalletDrawerVisible:boolean;
    editWalletDetailResult:TypeRequestResult;
}

export const action = {
    updateWalletListParams,
    getWalletList,
    getWalletDetail,
    toggleEditWalletDrawer,
    addWallet,
    updateWallet,
};

export const reducer = createReducer(
    {
        getWalletListParams:{
            page:1,
            pageSize:10,
            source:'all',
            type:'all',
            keyword_type:'name',
            keyword:''
        },
        getWalletListResult:{},
        getWalletDetailResult:{},
        editWalletType:'',
        editWalletDrawerVisible:false,
        editWalletDetailResult:{},
    },
    {
        [type.updateWalletListParams](state,{params}){
            return {
                ...state,
                getWalletListParams:params
            }
        },
        [type.getWalletList](state, {payload} ) {
            return {
              ...state,
              getWalletListResult:payload
            };
        },
        [type.getWalletDetail](state,{payload}){
            return {
                ...state,
                getWalletDetailResult:payload
            }
        },
        [type.toggleEditWalletDrawer](state,{visible,editType}){
            return {
                ...state,
                editWalletDrawerVisible:visible,
                editWalletType:editType
            }
        },
        [type.addWallet](state,{payload}){
            return {
                ...state,
                editWalletDetailResult:payload
            }
        },
        [type.updateWallet](state,{payload}){
            return {
                ...state,
                editWalletDetailResult:payload
            }
        },
    }
)