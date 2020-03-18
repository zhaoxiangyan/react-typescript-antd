import React from 'react';
import {Tabs} from 'antd';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import {ConnectInjectIntlPage} from '@/store/types';
import DepositTab from './DepositTab';

const {TabPane} = Tabs;

interface TaskDetailTabProps extends ConnectInjectIntlPage{
    editType:string;
}

const TaskDetailTab =({editType}:TaskDetailTabProps)=>{

    const TabList = [{
        key:"1",
        tab:"入金任务",
        children:DepositTab()
    }]
    return(
        <Tabs>
            {editType==='update'&&TabList.map(props=><TabPane {...props} />)}
        </Tabs>
    )
}

export default injectIntl(connect(
    ({task:{editTaskType},}:GlobalState)=>({
        editType:editTaskType
    })
)(TaskDetailTab));