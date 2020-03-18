import React from 'react';
import {Form,Row,Col,Button} from 'antd';
import {FormFinishProp} from '@/store/types';
import FormItemInput from '@/components/common/form/FormItemInput';


const CustomerTrackingTab = () =>{
    const onFinish=(values:FormFinishProp)=>{
        console.log(values);
    }

    const props = [{
        name:'classify',
        label:"客户分类",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'dfsf',
        label:"回访方式",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'beizhu',
        label:"备注",
        type:'textarea',
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

export default CustomerTrackingTab;