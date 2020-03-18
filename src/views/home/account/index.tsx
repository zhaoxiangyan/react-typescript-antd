import React, { useEffect } from 'react';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {ConnectInjectIntlPage,PageListResult,PageListParams} from '@/store/types';
import {TableList,ListTitle,TableSearchTitle} from '@/components/common';
import { GlobalState } from '@/store/combine-reducers';
import {action as accountActions} from './store';
import EditAccountDrawer from './EditAccountDrawer';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {Route,Link} from 'react-router-dom';

interface AccountProps extends ConnectInjectIntlPage{
    getAccountListParams:PageListParams;
    getAccountListResult:PageListResult;
    editType:string;
}

const Account = ({
    intl:{messages,formatMessage},
    dispatch,
    getAccountListParams,
    getAccountListResult,
    editType
}:AccountProps) =>{

    useEffect(()=>{
        getList();
    },[getAccountListParams])

    const getList=()=>{
        dispatch(accountActions.getAccountList(getAccountListParams));
    }

    const onSearch=(params:PageListParams)=>{
        dispatch(accountActions.updateAccountListParams(params))
    }

    const onSorterPageChange=(pagination:any)=>{
        dispatch(accountActions.updateAccountListParams({
            ...getAccountListParams,
            page:pagination.current,
            pageSize:pagination.pageSize
        }))
    }

    const toggleEditModal=(visible:boolean,editType:string)=>{
        dispatch(accountActions.toggleEditAccountDrawer(visible,editType))
    }

    const listProps = {
        title:()=><TableSearchTitle name="AccountList" initialValues={getAccountListParams}  onSearch={(params)=>onSearch(params)} />,
        columns:[
            {dataIndex:'number',title:"账号ID",render:(text:any,record:any)=><Link to={`/home/account/${record.id}`}>{text}</Link>},
            {dataIndex:'account',title:"MT4账号"},
            {dataIndex:'type',title:"账号类型"},
            {dataIndex:'name',title:"姓名"},
            {dataIndex:'user_name',title:"上级用户"},
            {dataIndex:'mt_group',title:"MT4组"},
            {dataIndex:'open_time',title:"开户时间"},
            {dataIndex:'balance',title:"余额"},
            {dataIndex:'net_worth',title:"净值"},
            {dataIndex:'profit_loss',title:"浮动盈亏"},
            {dataIndex:'account_name',title:"账号名"},
        ],
        listData:getAccountListResult,
        onChange:onSorterPageChange
    };

    return(
        <>
            <ListTitle 
            title="账号" 
            actions={[<Button key="actions_1" type="primary" icon={<PlusOutlined />} onClick={()=>toggleEditModal(true,'add')}>新增</Button>]} 
            />
            <TableList {...listProps} />
            {editType==="add"&&<EditAccountDrawer />}
            <Route path="/home/account/:id" component={EditAccountDrawer} />
        </>
    )
}


export default injectIntl(connect(
    ({account:{getAccountListParams,getAccountListResult,editAccountDrawerVisible,editAccountType}}:GlobalState)=>({
        getAccountListParams,
        getAccountListResult,
        editType:editAccountType
    })
)(Account));