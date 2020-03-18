import React from 'react';
import {Form,Row,Col,Button} from 'antd';
import {FormFinishProp} from '@/store/types';
import FormItemInput from '@/components/common/form/FormItemInput';


const IdentityInfoTab = () =>{
    const onFinish=(values:FormFinishProp)=>{
        console.log(values);
    }

    const props = [{
        name:'name',
        label:"姓名",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'card_number',
        label:"证件号码",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'card_type',
        label:"证件类型",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'birth',
        label:"生日",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'card_front',
        label:"证件正面",
        type:'upload',
        rules:[{required:true,message:'请输入'}]
    },{
        name:'card_front',
        label:"证件反面",
        type:'upload',
        rules:[{required:true,message:'请输入'}]
    },]

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

export default IdentityInfoTab;