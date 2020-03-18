import * as type from '@/store/action-types';
import api,{RequestUrl} from '@/axios';
import {createReducer,PageListParams,PageListResult,TypeRequestResult} from '@/store/types';

// 客户列表查询参数
const updateTaskListParams=(params:any)=>({
    type:type.updateTaskListParams,
    params
})
// 获取客户列表
const getTaskList=(data:any,nextAction?:any)=>({
    type: type.getTaskList,
    payload: api('get',RequestUrl.getTaskList,false,data),
    nextAction,
})

// 获取客户详情
const getTaskDetail=(data:{id:string})=>({
    type:type.getTaskDetail,
    payload:api('get',RequestUrl.getTaskDetail,false,data),
    nextAction:toggleEditTaskDrawer(true,'update')
})
// 新增客户基本信息
const addTask=(data: any,nextAction: any)=>({
    type:type.addTask,
    payload:api('post',RequestUrl.addTask,true,data),
    nextAction:addTaskSuccess(nextAction)
})
const addTaskSuccess=(nextAction:any)=>(
    (dispatch:any)=>{
        nextAction();
        dispatch(toggleEditTaskDrawer(false,''))
    }
)
// 修改客户基本信息
const updateTask=(data: any,nextAction: any)=>({
    type:type.updateTask,
    payload:api('post',RequestUrl.updateTask,true,data),
    nextAction
})


// 客户详情页参数修改
const toggleEditTaskDrawer=(visible:boolean,editType:string)=>({
    type:type.toggleEditTaskDrawer,
    visible,
    editType,
    // nextAction:
})

export interface State { 
    getTaskListParams:PageListParams,
    getTaskListResult:PageListResult;
    getTaskDetailResult:TypeRequestResult;
    editTaskType:string;
    editTaskDrawerVisible:boolean;
    editTaskDetailResult:TypeRequestResult;
}

export const action = {
    updateTaskListParams,
    getTaskList,
    getTaskDetail,
    toggleEditTaskDrawer,
    addTask,
    updateTask,
};

export const reducer = createReducer(
    {
        getTaskListParams:{
            page:1,
            pageSize:10,
            source:'all',
            type:'all',
            keyword_type:'nickname',
            keyword:''
        },
        getTaskListResult:{},
        getTaskDetailResult:{},
        editTaskType:'',
        editTaskDrawerVisible:false,
        editTaskDetailResult:{},
    },
    {
        [type.updateTaskListParams](state,{params}){
            return {
                ...state,
                getTaskListParams:params
            }
        },
        [type.getTaskList](state, {payload} ) {
            return {
              ...state,
              getTaskListResult:payload
            };
        },
        [type.getTaskDetail](state,{payload}){
            return {
                ...state,
                getTaskDetailResult:payload
            }
        },
        [type.toggleEditTaskDrawer](state,{visible,editType}){
            return {
                ...state,
                editTaskDrawerVisible:visible,
                editTaskType:editType
            }
        },
        [type.addTask](state,{payload}){
            return {
                ...state,
                editTaskDetailResult:payload
            }
        },
        [type.updateTask](state,{payload}){
            return {
                ...state,
                editTaskDetailResult:payload
            }
        },
    }
)