import React from 'react';
import {Row,Col,Form,Button} from 'antd';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import SwitchLanguage from '@/components/page/SwitchLanguage';
import {ConnectInjectIntlPage,FormFinishProp} from '@/store/types';
import FormItemInput from '@/components/common/FormItemInput';
import {action as serverActions} from '@/store/server';

interface LoginProps extends ConnectInjectIntlPage{

}

const Login = ({intl:{messages,formatMessage},dispatch}:LoginProps)=>{
    const onFinish=(values:FormFinishProp)=>{
        dispatch(serverActions.login(values));
    }
    return(
        <Row className="login" align="middle" justify="center">
            <Col className="login_box">
                <Row className="login_top" align="middle" justify="space-between">
                    <img src={require('@/assets/img/logo.png')} alt="" />
                    <SwitchLanguage />   
                </Row>
                <Form onFinish={onFinish}>
                    <FormItemInput 
                    name="email" 
                    rules={[{ required: true, message: formatMessage({id:'global.19'})}]}
                    inputProps={{
                        prefix:<UserOutlined />,
                        placeholder:formatMessage({id:'global.17'})
                    }}
                    />
                    <FormItemInput 
                    name="password" 
                    rules={[{ required: true, message: formatMessage({id:'pages.Login.1'})}]}
                    type="password" 
                    inputProps={{
                        prefix:<LockOutlined />,
                        placeholder:formatMessage({id:'pages.1'})
                    }}
                    />
                    <Button type="primary" htmlType="submit" block>{messages['pages.Login.4']}</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default injectIntl(connect()(Login));