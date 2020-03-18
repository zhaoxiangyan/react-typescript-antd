import React from 'react';
import {Table} from 'antd';
import { TableProps } from 'antd/lib/table';
import { PaginationProps } from 'antd/lib/pagination';
import {PageListResult} from '@/store/types';

interface TableListProps extends TableProps<any>{
    listData?:PageListResult;
    showPagination?:boolean;
    // rowKey:string;
}
const TableList = ({
    rowKey="id",
    columns,
    listData={
        dataSource:[],
        total:0,
        loading:false,
        current:1,
        pageSize:20,
    },
    pagination,
    showPagination=true,
    ...otherProps
}:TableListProps) =>{

    // console.log(listData);

    const {dataSource=[],total=0,loading=false,current=1,pageSize=20} = listData;

    const paginationProps: PaginationProps = {
        ...pagination,
        pageSize,
        current,
        total,
        size:'small',
        showTotal:(total) => total,
        showSizeChanger:true,
        showQuickJumper:true,
    };
    
    const props: TableProps<any> = {
        bordered:true,
        tableLayout:'auto',
        size: 'small',
        rowKey,
        scroll:{x:'max-content'},
        dataSource,
        loading,
        ...otherProps,
        columns:columns&&columns.map(v=>({align:'center',...v})),
        pagination:showPagination?paginationProps:false
    };

    return(
        <Table 
        className="table_list"
        {...props}
        />
    )
}

export default TableList