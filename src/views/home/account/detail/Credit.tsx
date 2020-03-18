import React from 'react';
import {Form,Row,Col,Button} from 'antd';
import {FormFinishProp} from '@/store/types';
import FormItemInput from '@/components/common/form/FormItemInput';


const CreditTab = () =>{
    const onFinish=(values:FormFinishProp)=>{
        console.log(values);
    }

    const props = [{
        name:'type',
        label:"操作类型",
        type:'select',
        options:[{key:'d',value:'d',label:'信用入金'},{key:'w',value:'w',label:'信用出金'}],
        rules:[{required:true,message:'请输入'}]
    },{
        name:'dw_type',
        label:"信用出入金类型",
        type:'select',
        options:[{key:'d',value:'d',label:'充值入金'},{key:'w',value:'w',label:'返佣出金'}],
        rules:[{required:true,message:'请输入'}]
    },{
        name:'balance',
        label:"金额",
        type:'number',
        rules:[{required:true,message:'请输入'}]
    },{
        name:'beizhu',
        label:"备注",
        type:'textarea',
        rules:[{required:true,message:'请输入'}]
    },{
        name:'is_email',
        label:"发送信用出入金邮件",
        type:'checkbox',
        valuePropName:'checked',
        noStyle:true,
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
                <Col key={`${v.name}_${v.label}`} sm={24}>
                    <FormItemInput {...v} />
                </Col>)}
                <Col sm={24}>
                    <Button type="primary" htmlType="submit">保存</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default CreditTab;