import React from 'react';
import {Form,Row,Col,Button,message} from 'antd';
import {ConnectInjectIntlPage,FormFinishProp,TypeRequestResult} from '@/store/types';
import FormItemInput,{FormItemInputProps} from '@/components/common/form/FormItemInput';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import {action as userActions} from '@/views/home/user/store';


interface InfoTabProps extends ConnectInjectIntlPage{
    visible:boolean;
    editUserDetailResult:TypeRequestResult;
    getUserDetailResult:TypeRequestResult;
    editType:string;
}

const InfoTab = ({
    visible,
    editUserDetailResult:{loading},
    getUserDetailResult,
    editType,
    dispatch,
}:InfoTabProps) =>{
    

    const onFinish=(values:FormFinishProp)=>{
        if(editType==='update'){
            dispatch(userActions.updateUser(values,message.success('修改成功')));
        }else{
            dispatch(userActions.addUser(values,message.success('新增成功')));
        }
    }

    
    const propsArray:FormItemInputProps[] = [{
        name:'username',
        label:"用户名",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'email',
        label:"邮箱",
        rules:[{required:true,message:'请输入'}]
    },{
        name:'role',
        label:"角色",
        type:'select',
        options:['1','2','3'].map(v=>({key:v,value:v,label:v})),
        rules:[{required:true,message:'请输入'}]
    }]

    let initialValues:{} = {};
    let hiddenFields:{name?:string,type?:string,noStyle:boolean}[] = [];
    if(editType==='update'){
        const {result:userDetail={}} = getUserDetailResult;
        initialValues = userDetail||{};
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
    ({user:{editUserDrawerVisible,editUserDetailResult,getUserDetailResult,editUserType},}:GlobalState)=>({
        visible:editUserDrawerVisible,
        getUserDetailResult,
        editUserDetailResult,
        editType:editUserType
    })
)(InfoTab));