import React from 'react';
import {Form,Button,Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {FormFinishProp} from '@/store/types';
import FormItemInput from '@/components/common/form/FormItemInput';
import {PageListParams} from '@/store/types';
import '../index.less';

const {Group} = Input;

interface TableSearchTitleProps{
    name:string;
    initialValues?:any;
    onSearch:(params:PageListParams)=>void
}
const TableSearchTitle = ({
    name,
    initialValues={},
    onSearch
}:TableSearchTitleProps) =>{

    const onFinish=(values:FormFinishProp)=>{
        // console.log(values);
        const {time,...otherParams} = values;
        // console.log([(time&&time[0])?time[0].format('YYYY-MM-DD'):'', (time&&time[1])?time[1].format('YYYY-MM-DD'):''])
        onSearch({
            ...otherParams,
            start:(time&&time[0])?time[0].format('YYYY-MM-DD'):'',
            end:(time&&time[1])?time[1].format('YYYY-MM-DD'):''
        })
    }

    const source_options = [{
        key:"all",
        value:"all",
        label:'注册渠道'
    },{
        key:'IOS',
        value:'IOS',
        label:'IOS'
    },{
        key:'Android',
        value:'Android',
        label:'Android'
    },{
        key:'Web',
        value:'Web',
        label:'Web'
    },{
        key:'H5',
        value:'H5',
        label:'H5'
    }]

    const type_options = [{
        key:"all",
        value:"all",
        label:'客户类型'
    },{
        key:'线索客户',
        value:'线索客户',
        label:'线索客户'
    },{
        key:'注册客户',
        value:'注册客户',
        label:'注册客户'
    },{
        key:'首次入金',
        value:'首次入金',
        label:'首次入金'
    },{
        key:'多次入金',
        value:'多次入金',
        label:'多次入金'
    }]

    const keyword_type_options = [{
        key:"nickname",
        value:"nickname",
        label:'呢称'
    },{
        key:'name',
        value:'name',
        label:'姓名'
    },{
        key:'mobile',
        value:'mobile',
        label:'手机'
    },{
        key:'email',
        value:'email',
        label:'邮箱'
    }]

    const account_type_options = [{
        key:'all',
        value:'all',
        label:'所有账号',
    },{
        key:'live',
        value:'live',
        label:'真实',
    },{
        key:'demo',
        value:'demo',
        label:'模拟',
    }]

    return(
        <Form
        onFinish={onFinish}
        initialValues={initialValues}
        >
            <Group compact className="table_search_title">
                {['WalletList','AccountList'].includes(name)
                ?
                null
                :
                <Group compact>
                    <Button>
                        {(()=>{switch(name){
                            case 'CustomerList':return "注册时间";
                            case 'UserList':return "创建时间";
                            default: return null;
                        }})()}
                    </Button>
                    <FormItemInput name="time" type="RangeDatePicker" noStyle />
                </Group>}
                {name==='CustomerList'&&<FormItemInput name="source" type="select" options={source_options} noStyle />}
                {name==='CustomerList'&&<FormItemInput name="type" type="select" options={type_options} noStyle />}
                {name==='AccountList'&&<FormItemInput name="type" type="select" options={account_type_options} noStyle />}
                <Group compact>
                    <FormItemInput name="keyword_type" type="select" options={keyword_type_options} noStyle />
                    <FormItemInput name="keyword" noStyle />
                </Group>
                <span>
                    <Button icon={<SearchOutlined />} type="primary" htmlType="submit"/>
                </span>
            </Group>
        </Form>
    )
}

export default TableSearchTitle;