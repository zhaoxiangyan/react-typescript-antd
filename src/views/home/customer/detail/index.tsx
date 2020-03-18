import React from 'react';
import {Tabs} from 'antd';
import BaseInfoTab from './BaseInfoTab';
import CustomerTrackingTab from './CustomerTrackingTab';
import LoginInfoTab from './LoginInfoTab';
import IdentityInfoTab from './IdentityInfoTab';
import BankInfoTab from './BankInfoTab';
import AccountInfoTab from './AccountInfoTab';
import CapitalRecordTab from './CapitalRecordTab';
import TransactionRecordTab from './TransactionRecordTab';
import ProxySettingsTab from './ProxySettingsTab';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import {ConnectInjectIntlPage} from '@/store/types';

const {TabPane} = Tabs;

interface CustomerDetailTabProps extends ConnectInjectIntlPage{
    editType:string;
}

const CustomerDetailTab =({editType}:CustomerDetailTabProps)=>{

    const TabList = [{
        key:"2",
        tab:"客户追踪",
        children:CustomerTrackingTab()
    },{
        key:"3",
        tab:"登录信息",
        children:LoginInfoTab()
    },{
        key:"4",
        tab:"身份信息",
        children:IdentityInfoTab()
    },{
        key:"5",
        tab:"银行信息",
        children:BankInfoTab()
    },{
        key:"6",
        tab:"账号信息",
        children:AccountInfoTab()
    },{
        key:"7",
        tab:"资金记录",
        children:CapitalRecordTab()
    },{
        key:"8",
        tab:"交易记录",
        children:TransactionRecordTab()
    },{
        key:"9",
        tab:"代理设置",
        children:ProxySettingsTab()
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
    ({customer:{editCustomerType},}:GlobalState)=>({
        editType:editCustomerType
    })
)(CustomerDetailTab));