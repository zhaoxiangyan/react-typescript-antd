import React from 'react';
import {Form,Row,Col,Button,message} from 'antd';
import {ConnectInjectIntlPage,FormFinishProp,TypeRequestResult} from '@/store/types';
import FormItemInput,{FormItemInputProps} from '@/components/common/form/FormItemInput';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import {action as accountActions} from '@/views/home/account/store';


interface BaseInfoTabProps extends ConnectInjectIntlPage{
    visible:boolean;
    editAccountDetailResult:TypeRequestResult;
    getAccountDetailResult:TypeRequestResult;
    editType:string;
}

const BaseInfoTab = ({
    visible,
    editAccountDetailResult:{loading},
    getAccountDetailResult,
    editType,
    dispatch,
}:BaseInfoTabProps) =>{
    

    const onFinish=(values:FormFinishProp)=>{
        if(editType==='update'){
            dispatch(accountActions.updateAccount(values,message.success('修改成功')));
        }else{
            dispatch(accountActions.addAccount(values,message.success('新增成功')));
        }
    }

    
    const propsArray:FormItemInputProps[] = [{
        name:'account',
        label:"MT4账号",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'account_name',
        label:"账号名",
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
        name:'type',
        label:"账号类型",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'leverage',
        label:"杠杆",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'trader_status',
        label:"交易状态",
        type:'switch',
        valuePropName:'checked',
        rules:[{required:true,message:'请输入'}]
    },{
        name:'login_status',
        label:"登录状态",
        type:'switch',
        valuePropName:'checked',
        rules:[{required:true,message:'请输入'}]
    }]

    let initialValues:{} = {};
    let hiddenFields:{name?:string,type?:string,noStyle:boolean}[] = [];
    if(editType==='update'){
        const {result:accountDetail={}} = getAccountDetailResult;
        initialValues = accountDetail||{};
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
    ({account:{editAccountDrawerVisible,editAccountDetailResult,getAccountDetailResult,editAccountType},}:GlobalState)=>({
        visible:editAccountDrawerVisible,
        getAccountDetailResult,
        editAccountDetailResult,
        editType:editAccountType
    })
)(BaseInfoTab));