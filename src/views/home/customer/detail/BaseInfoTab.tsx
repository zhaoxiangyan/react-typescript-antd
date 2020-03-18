import React from 'react';
import {Form,Row,Col,Button,message} from 'antd';
import {ConnectInjectIntlPage,FormFinishProp,TypeRequestResult} from '@/store/types';
import FormItemInput,{FormItemInputProps} from '@/components/common/form/FormItemInput';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import {action as customerActions} from '@/views/home/customer/store';


interface BaseInfoTabProps extends ConnectInjectIntlPage{
    visible:boolean;
    editCustomerDetailResult:TypeRequestResult;
    getCustomerDetailResult:TypeRequestResult;
    editType:string;
}

const BaseInfoTab = ({
    visible,
    editCustomerDetailResult:{loading},
    getCustomerDetailResult,
    editType,
    dispatch,
}:BaseInfoTabProps) =>{
    

    const onFinish=(values:FormFinishProp)=>{
        if(editType==='update'){
            dispatch(customerActions.updateCustomer(values,message.success('修改成功')));
        }else{
            dispatch(customerActions.addCustomer(values,message.success('新增成功')));
        }
    }

    
    const propsArray:FormItemInputProps[] = [{
        name:'nickname',
        label:"呢称",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'name',
        label:"姓名",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'mobile',
        label:"手机",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'email',
        label:"邮箱",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'user_name',
        label:"上级用户",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'sale_name',
        label:"所属销售",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'classify',
        label:"客户分类",
        rules:[{required:true,message:'请输入'}]
    }]

    let initialValues:{} = {};
    let hiddenFields:{name?:string,type?:string,noStyle:boolean}[] = [];
    if(editType==='update'){
        const {result:customerDetail={}} = getCustomerDetailResult;
        initialValues = customerDetail||{};
        hiddenFields.push({name:'id',type:'hidden',noStyle:true})
    }

    return(
        <Form 
        onFinish={onFinish}
        labelCol={{span:24}}
        wrapperCol={{span:24}}
        initialValues={initialValues}
        >
            {hiddenFields.map(props=><FormItemInput key={`${props.name}_`} {...props} />)}
            <Row gutter={30}>
                {propsArray.map(props=>
                <Col key={`${props.name}_${props.label}`} sm={12}>
                    <FormItemInput {...props} />
                </Col>)}
                <Col sm={24}>
                    <Button type="primary" htmlType="submit" loading={loading}>保存</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default injectIntl(connect(
    ({customer:{editCustomerDrawerVisible,editCustomerDetailResult,getCustomerDetailResult,editCustomerType},}:GlobalState)=>({
        visible:editCustomerDrawerVisible,
        getCustomerDetailResult,
        editCustomerDetailResult,
        editType:editCustomerType
    })
)(BaseInfoTab));