import React, { useEffect } from 'react';
import {Drawer,Row,Col} from 'antd';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {DrawerProps} from 'antd/lib/drawer';
import { push } from 'connected-react-router';
import {TypeRequestResult,ConnectInjectIntlPage} from '@/store/types';
import { GlobalState } from '@/store/combine-reducers';
import {action as walletActions} from './store';
import WalletDetailTab from './detail';

interface EditWalletDrawerProps extends ConnectInjectIntlPage{
    visible:boolean;
    editWalletDetailResult:TypeRequestResult;
    getWalletDetailResult:TypeRequestResult;
    editType:string;
    match?:any
}

const EditWalletDrawer =({
    visible,
    editWalletDetailResult:{loading},
    getWalletDetailResult:{result:walletDetail},
    editType,
    dispatch,
    match:{params={}}={}
}:EditWalletDrawerProps)=>{

    useEffect(()=>{
        const {id} = params;
        if(id){
            dispatch(walletActions.getWalletDetail({id}));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const closeDrawer=(visible:boolean)=>{
        dispatch(walletActions.toggleEditWalletDrawer(visible,""));
        if(editType==='update'){
            dispatch(push('/home/wallet'));
        }
    }
    const props:DrawerProps = {
        title:editType==='update'?'钱包详情':'新增',
        width:800,
        placement:'right',
        onClose:()=>closeDrawer(false),
        visible,
        destroyOnClose:true,
    }
    return(
        <Drawer {...props}>
            <Row>
                <Col sm={8}>返佣钱包：1213</Col>
                <Col sm={8}>交易钱包：1100</Col>
                <Col sm={8}>分润钱包：3232</Col>
            </Row>
            <WalletDetailTab />
        </Drawer>
    )
}

export default injectIntl(connect(
    ({wallet:{editWalletDrawerVisible,editWalletDetailResult,getWalletDetailResult,editWalletType},}:GlobalState)=>({
        visible:editWalletDrawerVisible,
        getWalletDetailResult,
        editWalletDetailResult,
        editType:editWalletType
    })
)(EditWalletDrawer));