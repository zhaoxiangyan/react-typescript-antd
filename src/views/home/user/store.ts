import * as type from '@/store/action-types';
import api,{RequestUrl} from '@/axios';
import {createReducer,PageListResult,TypeRequestResult,PageListParams} from '@/store/types';

// 用户列表查询参数
const updateUserListParams=(params:any)=>({
    type:type.updateUserListParams,
    params
})
// 获取用户列表
const getUserList=(data:any,nextAction?:any)=>({
    type: type.getUserList,
    payload: api('get',RequestUrl.getUserList,false,data),
    nextAction,
})

// 获取用户详情
const getUserDetail=(data:{id:string})=>({
    type:type.getUserDetail,
    payload:api('get',RequestUrl.getUserDetail,false,data),
    nextAction:toggleEditUserDrawer(true,'update')
})
// 新增用户登录信息
const addUser=(data: any,nextAction: any)=>({
    type:type.addUser,
    payload:api('post',RequestUrl.addUser,true,data),
    nextAction:addUserSuccess(nextAction)
})
const addUserSuccess=(nextAction:any)=>(
    (dispatch:any)=>{
        nextAction();
        dispatch(toggleEditUserDrawer(false,''))
    }
)
// 修改用户登录信息
const updateUser=(data: any,nextAction: any)=>({
    type:type.updateUser,
    payload:api('post',RequestUrl.updateUser,true,data),
    nextAction
})


// 用户详情页参数修改
const toggleEditUserDrawer=(visible:boolean,editType:string)=>({
    type:type.toggleEditUserDrawer,
    visible,
    editType,
    // nextAction:
})

export interface State { 
    getUserListParams:PageListParams,
    getUserListResult:PageListResult;
    getUserDetailResult:TypeRequestResult;
    editUserType:string;
    editUserDrawerVisible:boolean;
    editUserDetailResult:TypeRequestResult;
}

export const action = {
    updateUserListParams,
    getUserList,
    getUserDetail,
    toggleEditUserDrawer,
    addUser,
    updateUser,
};

export const reducer = createReducer(
    {
        getUserListParams:{
            page:1,
            pageSize:10,
            keyword_type:'nickname',
            keyword:''
        },
        getUserListResult:{},
        getUserDetailResult:{},
        editUserType:'',
        editUserDrawerVisible:false,
        editUserDetailResult:{},
    },
    {
        [type.updateUserListParams](state,{params}){
            return {
                ...state,
                getUserListParams:params
            }
        },
        [type.getUserList](state, {payload} ) {
            return {
              ...state,
              getUserListResult:payload
            };
        },
        [type.getUserDetail](state,{payload}){
            return {
                ...state,
                getUserDetailResult:payload
            }
        },
        [type.toggleEditUserDrawer](state,{visible,editType}){
            return {
                ...state,
                editUserDrawerVisible:visible,
                editUserType:editType
            }
        },
        [type.addUser](state,{payload}){
            return {
                ...state,
                editUserDetailResult:payload
            }
        },
        [type.updateUser](state,{payload}){
            return {
                ...state,
                editUserDetailResult:payload
            }
        },
    }
)