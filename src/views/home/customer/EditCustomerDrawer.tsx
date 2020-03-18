import React, { useEffect } from 'react';
import {Drawer} from 'antd';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {DrawerProps} from 'antd/lib/drawer';
import { push } from 'connected-react-router';
import {TypeRequestResult,ConnectInjectIntlPage} from '@/store/types';
import { GlobalState } from '@/store/combine-reducers';
import {action as customerActions} from './store';
import CustomerDetailTab from './detail';

interface EditCustomerDrawerProps extends ConnectInjectIntlPage{
    visible:boolean;
    editCustomerDetailResult:TypeRequestResult;
    getCustomerDetailResult:TypeRequestResult;
    editType:string;
    match?:any
}

const EditCustomerDrawer =({
    visible,
    editCustomerDetailResult:{loading},
    getCustomerDetailResult:{result:customerDetail},
    editType,
    dispatch,
    match:{params={}}={}
}:EditCustomerDrawerProps)=>{

    useEffect(()=>{
        const {id} = params;
        if(id){
            dispatch(customerActions.getCustomerDetail({id}));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const closeDrawer=(visible:boolean)=>{
        dispatch(customerActions.toggleEditCustomerDrawer(visible,""));
        if(editType==='update'){
            dispatch(push('/home/customer'));
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
            <CustomerDetailTab />
        </Drawer>
    )
}

export default injectIntl(connect(
    ({customer:{editCustomerDrawerVisible,editCustomerDetailResult,getCustomerDetailResult,editCustomerType},}:GlobalState)=>({
        visible:editCustomerDrawerVisible,
        getCustomerDetailResult,
        editCustomerDetailResult,
        editType:editCustomerType
    })
)(EditCustomerDrawer));