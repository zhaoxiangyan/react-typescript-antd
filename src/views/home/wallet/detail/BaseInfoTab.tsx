import React from 'react';
import {Form,Row,Col,Button,message} from 'antd';
import {ConnectInjectIntlPage,FormFinishProp,TypeRequestResult} from '@/store/types';
import FormItemInput,{FormItemInputProps} from '@/components/common/form/FormItemInput';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import {action as walletActions} from '@/views/home/wallet/store';


interface BaseInfoTabProps extends ConnectInjectIntlPage{
    visible:boolean;
    editWalletDetailResult:TypeRequestResult;
    getWalletDetailResult:TypeRequestResult;
    editType:string;
}

const BaseInfoTab = ({
    visible,
    editWalletDetailResult:{loading},
    getWalletDetailResult,
    editType,
    dispatch,
}:BaseInfoTabProps) =>{
    

    const onFinish=(values:FormFinishProp)=>{
        if(editType==='update'){
            dispatch(walletActions.updateWallet(values,message.success('修改成功')));
        }else{
            dispatch(walletActions.addWallet(values,message.success('新增成功')));
        }
    }

    
    const propsArray = [{
        name:'type',
        label:"操作类型",
        type:'select',
        options:[{key:'d',value:'d',label:'入金'},{key:'w',value:'w',label:'出金'}],
        rules:[{required:true,message:'请输入'}]
    },{
        name:'dw_type',
        label:"出入金类型",
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
        label:"发送出入金邮件",
        type:'checkbox',
        valuePropName:'checked',
        noStyle:true,
        rules:[{required:true,message:'请输入'}]
    }]

    let initialValues:{} = {};
    let hiddenFields:{name?:string,type?:string,noStyle:boolean}[] = [];
    if(editType==='update'){
        const {result:walletDetail={}} = getWalletDetailResult;
        initialValues = walletDetail||{};
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
                {propsArray.map((props,index)=>
                <Col key={`${props.name}_${props.label}`} sm={24}>
                    <FormItemInput {...props} />
                </Col>)}
                <Col sm={24} style={{marginTop:15}}>
                    <Button type="primary" htmlType="submit" loading={loading}>保存</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default injectIntl(connect(
    ({wallet:{editWalletDrawerVisible,editWalletDetailResult,getWalletDetailResult,editWalletType},}:GlobalState)=>({
        visible:editWalletDrawerVisible,
        getWalletDetailResult,
        editWalletDetailResult,
        editType:editWalletType
    })
)(BaseInfoTab));