import React from 'react';
import {TableList} from '@/components/common';


const TransactionRecordTab = () =>{
    
    const liveListProps = {
        title:()=>"持仓订单",
        columns:[
            {dataIndex:'account',title:"账号"},
            {dataIndex:'id',title:"订单号"},
            {dataIndex:'account_type',title:"订单类型"},
            {dataIndex:'open_time',title:"品种"},
            {dataIndex:'mt_group',title:"手数"},
            {dataIndex:'balance',title:"开仓价格"},
            {dataIndex:'jinzhi',title:"开仓时间"},
            {dataIndex:'profit_loss',title:"止盈"},
            {dataIndex:'profit_los',title:"止损"},
            {dataIndex:'profit_lo',title:"浮动盈亏"},
        ],
        listData:{
            loading:false,
            current:1,
            pageSize:10,
            total:22,
            dataSource:[]
        },
    };

    const demoListProps = {
        title:()=>"挂单订单",
        columns:[
            {dataIndex:'account',title:"账号"},
            {dataIndex:'id',title:"订单号"},
            {dataIndex:'account_type',title:"订单类型"},
            {dataIndex:'open_time',title:"品种"},
            {dataIndex:'mt_group',title:"手数"},
            {dataIndex:'balance',title:"开仓价格"},
            {dataIndex:'jinzhi',title:"挂单时间"},
            {dataIndex:'profit_loss',title:"止盈"},
            {dataIndex:'profit_los',title:"止损"},
            {dataIndex:'profit_lo',title:"执行、取消时间"},
        ],
        listData:{
            loading:false,
            current:1,
            pageSize:10,
            total:22,
            dataSource:[]
        },
    };
    const walletListProps = {
        title:()=>"历史订单",
        columns:[
            {dataIndex:'account',title:"账号"},
            {dataIndex:'id',title:"订单号"},
            {dataIndex:'account_type',title:"订单类型"},
            {dataIndex:'open_time',title:"品种"},
            {dataIndex:'mt_group',title:"手数"},
            {dataIndex:'balance',title:"开仓价格"},
            {dataIndex:'jinzhi',title:"开仓时间"},
            {dataIndex:'profit_loss',title:"平仓价格"},
            {dataIndex:'profit_los',title:"平仓时间"},
            {dataIndex:'profit_lo',title:"盈亏"},
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
        <>
            <TableList {...liveListProps} />
            <TableList {...demoListProps} />
            <TableList {...walletListProps} />
        </>
    )
}

export default TransactionRecordTab;