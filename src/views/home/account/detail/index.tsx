import React from 'react';
import {Tabs} from 'antd';
import BaseInfoTab from './BaseInfoTab';
import DepositWithdraw from './DepositWithdraw';
import Credit from './Credit';
import Password from './Password';
import AccountAssignmentTab from './AccountAssignmentTab';
import TransactionRecordTab from './TransactionRecordTab';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import {ConnectInjectIntlPage} from '@/store/types';

const {TabPane} = Tabs;

interface AccountDetailTabProps extends ConnectInjectIntlPage{
    editType:string;
}

const AccountDetailTab =({editType}:AccountDetailTabProps)=>{

    const TabList = [{
        key:"2",
        tab:"出入金",
        children:DepositWithdraw()
    },{
        key:"3",
        tab:"信用金",
        children:Credit()
    },{
        key:"4",
        tab:"重置密码",
        children:Password()
    },{
        key:"5",
        tab:"账号归属",
        children:AccountAssignmentTab()
    },{
        key:"6",
        tab:"交易记录",
        children:TransactionRecordTab()
    }]
    return(
        <Tabs>
            <TabPane key="1" tab="基本信息">
                <BaseInfoTab />
            </TabPane>
    {editType==='update'&&TabList.map(props=><TabPane {...props} />)}
        </Tabs>
    )
}

export default injectIntl(connect(
    ({account:{editAccountType},}:GlobalState)=>({
        editType:editAccountType
    })
)(AccountDetailTab));