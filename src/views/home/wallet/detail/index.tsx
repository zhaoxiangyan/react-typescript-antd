import React from 'react';
import {Tabs} from 'antd';
import BaseInfoTab from './BaseInfoTab';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import {ConnectInjectIntlPage} from '@/store/types';

const {TabPane} = Tabs;

interface WalletDetailTabProps extends ConnectInjectIntlPage{
    editType:string;
}

const WalletDetailTab =({editType}:WalletDetailTabProps)=>{

    return(
        <Tabs>
            <TabPane key="1" tab="基本信息">
                <BaseInfoTab />
            </TabPane>
        </Tabs>
    )
}

export default injectIntl(connect(
    ({wallet:{editWalletType},}:GlobalState)=>({
        editType:editWalletType
    })
)(WalletDetailTab));