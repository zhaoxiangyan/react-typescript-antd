import React from 'react';
import {Tabs} from 'antd';
import InfoTab from './InfoTab';
import PasswordTab from './PasswordTab';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import {ConnectInjectIntlPage} from '@/store/types';

const {TabPane} = Tabs;

interface UserDetailTabProps extends ConnectInjectIntlPage{
    editType:string;
}

const UserDetailTab =({editType}:UserDetailTabProps)=>{
    return(
        <Tabs>
            <TabPane key="1" tab="登录信息">
                <InfoTab />
            </TabPane>
            {editType==='update'&&
            <TabPane key="2" tab="重置密码">
                <PasswordTab />
            </TabPane>}
        </Tabs>
    )
}

export default injectIntl(connect(
    ({user:{editUserType},}:GlobalState)=>({
        editType:editUserType
    })
)(UserDetailTab));