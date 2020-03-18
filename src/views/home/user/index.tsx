import React, { useState,useEffect } from 'react';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {ConnectInjectIntlPage,PageListResult,PageListParams} from '@/store/types';
import {TableList,ListTitle,TableSearchTitle} from '@/components/common';
import { GlobalState } from '@/store/combine-reducers';
import {action as userActions} from './store';
import EditUserDrawer from './EditUserDrawer';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {Route,Link} from 'react-router-dom';

interface UserProps extends ConnectInjectIntlPage{
    getUserListParams:PageListParams;
    getUserListResult:PageListResult;
    editType:string;
}

const User = ({
    intl:{messages,formatMessage},
    dispatch,
    getUserListParams,
    getUserListResult,
    editType
}:UserProps) =>{

    useEffect(()=>{
        getList();
    },[getUserListParams])

    const getList=()=>{
        dispatch(userActions.getUserList(getUserListParams));
    }

    const onSearch=(params:PageListParams)=>{
        dispatch(userActions.updateUserListParams(params))
    }

    const onSorterPageChange=(pagination:any)=>{
        dispatch(userActions.updateUserListParams({
            ...getUserListParams,
            page:pagination.current,
            pageSize:pagination.pageSize
        }))
    }

    const toggleEditModal=(visible:boolean,editType:string)=>{
        dispatch(userActions.toggleEditUserDrawer(visible,editType))
    }

    const listProps = {
        title:()=><TableSearchTitle name="UserList" initialValues={getUserListParams}  onSearch={(params)=>onSearch(params)} />,
        columns:[
            {dataIndex:'number',title:"用户ID",render:(text:any)=><Link to={`/home/user/${text}`}>{text}</Link>},
            {dataIndex:'username',title:"用户名"},
            {dataIndex:'email',title:"邮箱"},
            {dataIndex:'role',title:"角色"},
            {dataIndex:'created_at',title:"创建时间"},
            {dataIndex:'o',title:"操作"}
        ],
        listData:getUserListResult,
        onChange:onSorterPageChange
    };

    return(
        <>
            <ListTitle 
            title="CRM用户" 
            actions={[<Button key="actions_1" type="primary" icon={<PlusOutlined />} onClick={()=>toggleEditModal(true,'add')}>新增</Button>]} 
            // buttonActions={[{
            //     type:'primary',
            //     icon:PlusOutlined,
            //     onClick:()=>toggleEditModal(true,'add'),
            //     children:"新增"
            // }]}
            />
            <TableList {...listProps} />
            {editType==="add"&&<EditUserDrawer />}
            <Route path="/home/user/:id" component={EditUserDrawer} />
        </>
    )
}

export default injectIntl(connect(
    ({user:{getUserListParams,getUserListResult,editUserDrawerVisible,editUserType}}:GlobalState)=>({
        getUserListParams,
        getUserListResult,
        editType:editUserType
    })
)(User));