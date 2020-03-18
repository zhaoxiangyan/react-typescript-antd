import React from 'react';
import {Form,Row,Col,Button} from 'antd';
import {FormFinishProp} from '@/store/types';
import FormItemInput from '@/components/common/form/FormItemInput';


const LoginInfoTab = () =>{
    const onFinish=(values:FormFinishProp)=>{
        console.log(values);
    }

    const props = [{
        name:'mobile',
        label:"手机",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'email',
        label:"邮箱",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'password',
        label:"登录密码",
        type:'password',
        rules:[{required:true,message:'请输入'}]
    },{
        name:'is_email',
        label:"是否发送邮件",
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
                <Col sm={24} style={{marginTop:15}}>
                    <Button type="primary" htmlType="submit">保存</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default LoginInfoTab;