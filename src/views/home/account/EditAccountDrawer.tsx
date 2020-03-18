import React, { useEffect } from 'react';
import {Drawer} from 'antd';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {DrawerProps} from 'antd/lib/drawer';
import { push } from 'connected-react-router';
import {TypeRequestResult,ConnectInjectIntlPage} from '@/store/types';
import { GlobalState } from '@/store/combine-reducers';
import {action as accountActions} from './store';
import AccountDetailTab from './detail';

interface EditAccountDrawerProps extends ConnectInjectIntlPage{
    visible:boolean;
    editAccountDetailResult:TypeRequestResult;
    getAccountDetailResult:TypeRequestResult;
    editType:string;
    match?:any
}

const EditAccountDrawer =({
    visible,
    editAccountDetailResult:{loading},
    getAccountDetailResult:{result:accountDetail},
    editType,
    dispatch,
    match:{params={}}={}
}:EditAccountDrawerProps)=>{

    useEffect(()=>{
        const {id} = params;
        if(id){
            dispatch(accountActions.getAccountDetail({id}));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const closeDrawer=(visible:boolean)=>{
        dispatch(accountActions.toggleEditAccountDrawer(visible,""));
        if(editType==='update'){
            dispatch(push('/home/account'));
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
            <AccountDetailTab />
        </Drawer>
    )
}

export default injectIntl(connect(
    ({account:{editAccountDrawerVisible,editAccountDetailResult,getAccountDetailResult,editAccountType},}:GlobalState)=>({
        visible:editAccountDrawerVisible,
        getAccountDetailResult,
        editAccountDetailResult,
        editType:editAccountType
    })
)(EditAccountDrawer));