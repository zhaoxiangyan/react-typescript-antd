import React from 'react';
import {TableList} from '@/components/common';


const CapitalRecordTab = () =>{
    const liveListProps = {
        title:()=>"资金记录",
        columns:[
            {dataIndex:'account',title:"操作时间"},
            {dataIndex:'id',title:"账号"},
            {dataIndex:'account_type',title:"金额"},
            {dataIndex:'open_time',title:"订单号"},
            {dataIndex:'mt_group',title:"备注"},
        ],
        listData:{
            loading:false,
            current:1,
            pageSize:10,
            total:22,
            dataSource:[]
        },
    };

    return(
        <TableList {...liveListProps} />
    )
}

export default CapitalRecordTab;