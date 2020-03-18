import React, { useEffect } from 'react';
import {Drawer} from 'antd';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {DrawerProps} from 'antd/lib/drawer';
import { push } from 'connected-react-router';
import {TypeRequestResult,ConnectInjectIntlPage} from '@/store/types';
import { GlobalState } from '@/store/combine-reducers';
import {action as taskActions} from './store';
// import TaskDetailTab from './detail';

interface EditTaskDrawerProps extends ConnectInjectIntlPage{
    visible:boolean;
    editTaskDetailResult:TypeRequestResult;
    getTaskDetailResult:TypeRequestResult;
    editType:string;
    match?:any
}

const EditTaskDrawer =({
    visible,
    editTaskDetailResult:{loading},
    getTaskDetailResult:{result:taskDetail},
    editType,
    dispatch,
    match:{params={}}={}
}:EditTaskDrawerProps)=>{

    useEffect(()=>{
        const {id} = params;
        if(id){
            dispatch(taskActions.getTaskDetail({id}));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const closeDrawer=(visible:boolean)=>{
        dispatch(taskActions.toggleEditTaskDrawer(visible,""));
        if(editType==='update'){
            dispatch(push('/home/task/list'));
        }
    }
    const props:DrawerProps = {
        title:editType==='update'?'编辑':'新增',
        width:800,
        placement:'right',
        onClose:()=>closeDrawer(false),
        visible,
        destroyOnClose:true,
    }
    return(
        <Drawer {...props}>
            任务详情
            {/* <TaskDetailTab /> */}
        </Drawer>
    )
}

export default injectIntl(connect(
    ({task:{editTaskDrawerVisible,editTaskDetailResult,getTaskDetailResult,editTaskType},}:GlobalState)=>({
        visible:editTaskDrawerVisible,
        getTaskDetailResult,
        editTaskDetailResult,
        editType:editTaskType
    })
)(EditTaskDrawer));