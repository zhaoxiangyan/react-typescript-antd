import React, { useEffect } from 'react';
import {Drawer} from 'antd';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {DrawerProps} from 'antd/lib/drawer';
import { push } from 'connected-react-router';
import {TypeRequestResult,ConnectInjectIntlPage} from '@/store/types';
import { GlobalState } from '@/store/combine-reducers';
import {action as userActions} from './store';
import UserDetailTab from './detail';

interface EditUserDrawerProps extends ConnectInjectIntlPage{
    visible:boolean;
    editUserDetailResult:TypeRequestResult;
    getUserDetailResult:TypeRequestResult;
    editType:string;
    match?:any
}

const EditUserDrawer =({
    visible,
    editUserDetailResult:{loading},
    getUserDetailResult:{result:userDetail},
    editType,
    dispatch,
    match:{params={}}={}
}:EditUserDrawerProps)=>{

    useEffect(()=>{
        const {id} = params;
        if(id){
            dispatch(userActions.getUserDetail({id}));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const closeDrawer=(visible:boolean)=>{
        dispatch(userActions.toggleEditUserDrawer(visible,""));
        if(editType==='update'){
            dispatch(push('/home/user'));
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
            <UserDetailTab />
        </Drawer>
    )
}

export default injectIntl(connect(
    ({user:{editUserDrawerVisible,editUserDetailResult,getUserDetailResult,editUserType},}:GlobalState)=>({
        visible:editUserDrawerVisible,
        getUserDetailResult,
        editUserDetailResult,
        editType:editUserType
    })
)(EditUserDrawer));