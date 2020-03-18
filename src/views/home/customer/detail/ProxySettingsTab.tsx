import React from 'react';
import {Form,Row,Col,Button} from 'antd';
import {FormFinishProp} from '@/store/types';
import FormItemInput from '@/components/common/form/FormItemInput';


const ProxySettingsTab = () =>{
    const onFinish=(values:FormFinishProp)=>{
        console.log(values);
    }

    const props = [{
        name:'level',
        label:"返佣层级",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'fx',
        label:"FX",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'oil',
        label:"OIL",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'user_name',
        label:"上级用户",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'sale_name',
        label:"所属销售",
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

export default ProxySettingsTab;