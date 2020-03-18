import React, { useState,useEffect } from 'react';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {ConnectInjectIntlPage,PageListResult,PageListParams} from '@/store/types';
import {TableList,ListTitle,TableSearchTitle} from '@/components/common';
import { GlobalState } from '@/store/combine-reducers';
import {action as customerActions} from './store';
import EditCustomerDrawer from './EditCustomerDrawer';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {Route,Link} from 'react-router-dom';

interface CustomerProps extends ConnectInjectIntlPage{
    getCustomerListParams:PageListParams;
    getCustomerListResult:PageListResult;
    editType:string;
}

const Customer = ({
    intl:{messages,formatMessage},
    dispatch,
    getCustomerListParams,
    getCustomerListResult,
    editType
}:CustomerProps) =>{

    useEffect(()=>{
        getList();
    },[getCustomerListParams])

    const getList=()=>{
        dispatch(customerActions.getCustomerList(getCustomerListParams));
    }

    const onSearch=(params:PageListParams)=>{
        dispatch(customerActions.updateCustomerListParams(params))
    }

    const onSorterPageChange=(pagination:any)=>{
        dispatch(customerActions.updateCustomerListParams({
            ...getCustomerListParams,
            page:pagination.current,
            pageSize:pagination.pageSize
        }))
    }

    const toggleEditModal=(visible:boolean,editType:string)=>{
        dispatch(customerActions.toggleEditCustomerDrawer(visible,editType))
    }

    const listProps = {
        title:()=><TableSearchTitle name="CustomerList" initialValues={getCustomerListParams}  onSearch={(params)=>onSearch(params)} />,
        columns:[
            {dataIndex:'number',title:"客户ID",render:(text:any)=><Link to={`/home/customer/${text}`}>{text}</Link>},
            {dataIndex:'name',title:"真实姓名"},
            {dataIndex:'nickname',title:"呢称"},
            {dataIndex:'classify',title:"客户分类"},
            {dataIndex:'user_name',title:"上级用户"},
            {dataIndex:'sale_name',title:"所属销售"},
            {dataIndex:'created_at',title:"注册时间"},
            {dataIndex:'type',title:"客户类型"},
            {dataIndex:'source',title:"注册渠道"}
        ],
        listData:getCustomerListResult,
        onChange:onSorterPageChange
    };

    return(
        <>
            <ListTitle 
            title="客户" 
            actions={[<Button key="actions_1" type="primary" icon={<PlusOutlined />} onClick={()=>toggleEditModal(true,'add')}>新增</Button>]} 
            />
            <TableList {...listProps} />
            {editType==="add"&&<EditCustomerDrawer />}
            <Route path="/home/customer/:id" component={EditCustomerDrawer} />
        </>
    )
}

export default injectIntl(connect(
    ({customer:{getCustomerListParams,getCustomerListResult,editCustomerDrawerVisible,editCustomerType}}:GlobalState)=>({
        getCustomerListParams,
        getCustomerListResult,
        editType:editCustomerType
    })
)(Customer));