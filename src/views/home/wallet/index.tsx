import React, { useState,useEffect } from 'react';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {ConnectInjectIntlPage,PageListResult,PageListParams} from '@/store/types';
import {TableList,ListTitle,TableSearchTitle} from '@/components/common';
import { GlobalState } from '@/store/combine-reducers';
import {action as walletActions} from './store';
import EditWalletDrawer from './EditWalletDrawer';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {Route,Link} from 'react-router-dom';

interface WalletProps extends ConnectInjectIntlPage{
    getWalletListParams:PageListParams;
    getWalletListResult:PageListResult;
    editType:string;
}

const Wallet = ({
    intl:{messages,formatMessage},
    dispatch,
    getWalletListParams,
    getWalletListResult,
    editType
}:WalletProps) =>{

    useEffect(()=>{
        getList();
    },[getWalletListParams])

    const getList=()=>{
        dispatch(walletActions.getWalletList(getWalletListParams));
    }

    const onSearch=(params:PageListParams)=>{
        dispatch(walletActions.updateWalletListParams(params))
    }

    const onSorterPageChange=(pagination:any)=>{
        dispatch(walletActions.updateWalletListParams({
            ...getWalletListParams,
            page:pagination.current,
            pageSize:pagination.pageSize
        }))
    }

    const toggleEditModal=(visible:boolean,editType:string)=>{
        dispatch(walletActions.toggleEditWalletDrawer(visible,editType))
    }

    const listProps = {
        title:()=><TableSearchTitle name="WalletList" initialValues={getWalletListParams}  onSearch={(params)=>onSearch(params)} />,
        columns:[
            {dataIndex:'number',title:"客户ID",render:(text:any,record:any)=><Link to={`/home/wallet/${record.id}`}>{text}</Link>},
            {dataIndex:'name',title:"真实姓名"},
            {dataIndex:'mobile',title:"手机"},
            {dataIndex:'email',title:"邮箱"},
            {dataIndex:'balance',title:"余额"},
        ],
        listData:getWalletListResult,
        onChange:onSorterPageChange
    };

    return(
        <>
            <ListTitle 
            title="钱包" 
            actions={[]}
            // actions={[<Button key="actions_1" type="primary" icon={<PlusOutlined />} onClick={()=>toggleEditModal(true,'add')}>新增</Button>]} 
            />
            <TableList {...listProps} />
            {editType==="add"&&<EditWalletDrawer />}
            <Route path="/home/wallet/:id" component={EditWalletDrawer} />
        </>
    )
}

export default injectIntl(connect(
    ({wallet:{getWalletListParams,getWalletListResult,editWalletDrawerVisible,editWalletType}}:GlobalState)=>({
        getWalletListParams,
        getWalletListResult,
        editType:editWalletType
    })
)(Wallet));