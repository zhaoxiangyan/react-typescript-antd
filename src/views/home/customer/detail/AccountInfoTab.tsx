import React from 'react';
// import {Form,Row,Col,Button} from 'antd';
// import {FormFinishProp} from '@/store/types';
// import FormItemInput from '@/components/common/form/FormItemInput';
import {TableList} from '@/components/common';


const AccountInfoTab = () =>{
    
    const liveListProps = {
        title:()=>"真实账号",
        columns:[
            {dataIndex:'account',title:"MT4账号"},
            {dataIndex:'id',title:"ID"},
            {dataIndex:'account_type',title:"账号类型"},
            {dataIndex:'open_time',title:"开户时间"},
            {dataIndex:'mt_group',title:"MT4组"},
            {dataIndex:'balance',title:"账号余额"},
            {dataIndex:'jinzhi',title:"账号净值"},
            {dataIndex:'profit_loss',title:"账号浮动盈亏"},
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
        title:()=>"模拟账号",
        columns:[
            {dataIndex:'account',title:"MT4账号"},
            {dataIndex:'id',title:"ID"},
            {dataIndex:'account_type',title:"账号类型"},
            {dataIndex:'open_time',title:"开户时间"},
            {dataIndex:'mt_group',title:"MT4组"},
            {dataIndex:'balance',title:"账号余额"},
            {dataIndex:'jinzhi',title:"账号净值"},
            {dataIndex:'profit_loss',title:"账号浮动盈亏"},
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
        title:()=>"钱包",
        columns:[
            {dataIndex:'type',title:"钱包类型"},
            {dataIndex:'balance',title:"余额"},
            {dataIndex:'o',title:"操作"},
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

export default AccountInfoTab;