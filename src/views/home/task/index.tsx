import React, { useState,useEffect } from 'react';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {ConnectInjectIntlPage,PageListResult,PageListParams} from '@/store/types';
import {TableList,ListTitle,TableSearchTitle} from '@/components/common';
import { GlobalState } from '@/store/combine-reducers';
import {action as taskActions} from './store';
import EditTaskDrawer from './EditTaskDrawer';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {Route,Link} from 'react-router-dom';

interface TaskProps extends ConnectInjectIntlPage{
    getTaskListParams:PageListParams;
    getTaskListResult:PageListResult;
    editType:string;
}

const Task = ({
    intl:{messages,formatMessage},
    dispatch,
    getTaskListParams,
    getTaskListResult,
    editType
}:TaskProps) =>{

    useEffect(()=>{
        getList();
    },[getTaskListParams])

    const getList=()=>{
        dispatch(taskActions.getTaskList(getTaskListParams));
    }

    const onSearch=(params:PageListParams)=>{
        dispatch(taskActions.updateTaskListParams(params))
    }

    const onSorterPageChange=(pagination:any)=>{
        dispatch(taskActions.updateTaskListParams({
            ...getTaskListParams,
            page:pagination.current,
            pageSize:pagination.pageSize
        }))
    }

    const toggleEditModal=(visible:boolean,editType:string)=>{
        dispatch(taskActions.toggleEditTaskDrawer(visible,editType))
    }

    const listProps = {
        title:()=><TableSearchTitle name="TaskList" initialValues={getTaskListParams}  onSearch={(params)=>onSearch(params)} />,
        columns:[
            {dataIndex:'number',title:"客户ID",render:(text:any)=><Link to={`/home/task/list/${text}`}>{text}</Link>},
            {dataIndex:'name',title:"真实姓名"},
            {dataIndex:'nickname',title:"呢称"},
            {dataIndex:'classify',title:"客户分类"},
            {dataIndex:'user_name',title:"上级用户"},
            {dataIndex:'sale_name',title:"所属销售"},
            {dataIndex:'created_at',title:"注册时间"},
            {dataIndex:'type',title:"客户类型"},
            {dataIndex:'source',title:"注册渠道"}
        ],
        listData:getTaskListResult,
        onChange:onSorterPageChange
    };

    return(
        <>
            <ListTitle 
            title="客户" 
            actions={[<Button key="actions_1" type="primary" icon={<PlusOutlined />} onClick={()=>toggleEditModal(true,'add')}>新增</Button>]} 
            />
            <TableList {...listProps} />
            {editType==="add"&&<EditTaskDrawer />}
            <Route path="/home/task/list/:id" component={EditTaskDrawer} />
        </>
    )
}

export default injectIntl(connect(
    ({task:{getTaskListParams,getTaskListResult,editTaskDrawerVisible,editTaskType}}:GlobalState)=>({
        getTaskListParams,
        getTaskListResult,
        editType:editTaskType
    })
)(Task));