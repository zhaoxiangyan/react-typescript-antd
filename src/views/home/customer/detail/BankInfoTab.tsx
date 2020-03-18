import React from 'react';
import {Form,Row,Col,Button} from 'antd';
import {FormFinishProp} from '@/store/types';
import FormItemInput from '@/components/common/form/FormItemInput';


const BankInfoTab = () =>{
    const onFinish=(values:FormFinishProp)=>{
        console.log(values);
    }

    const props = [{
        name:'name',
        label:"姓名",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'bank_name',
        label:"银行名称",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'branch_name',
        label:"分行名称",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'bank_number',
        label:"银行卡号",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'bank_country',
        label:"银行国家",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'bank_address',
        label:"银行地址",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'swift',
        label:"Swift代码",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'mobile',
        label:"预留手机号",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'bank_front',
        label:"银行卡正面",
        type:'upload',
        rules:[{required:true,message:'请输入'}]
    },{
        name:'bank_back',
        label:"银行卡反面",
        type:'upload',
        rules:[{required:true,message:'请输入'}]
    }]

    return(
        <Form 
        onFinish={onFinish}
        labelCol={{span:24}}
        wrapperCol={{span:24}}
        >
            <Row gutter={30}>
                {props.map(v=>
                <Col key={`${v.name}_${v.label}`} sm={12}>
                    <FormItemInput {...v} />
                </Col>)}
                <Col sm={24}>
                    <Button type="primary" htmlType="submit">保存</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default BankInfoTab;