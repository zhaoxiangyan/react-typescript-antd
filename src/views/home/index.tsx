import React, { useState,useEffect } from 'react';
import {Layout} from 'antd';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import {ConnectInjectIntlPage} from '@/store/types';
import {action as serverActions} from '@/store/server';
import { push } from 'connected-react-router';
import {Header,Sider} from '@/views/home/layout';
import styles from '@/views/home/layout/index.module.less';

const {Content,Footer} = Layout;

interface HomeProps extends ConnectInjectIntlPage{

}

const Home =({dispatch}:HomeProps)=>{

    const [collapsed,setCollapsed] = useState();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            dispatch(serverActions.tokenSave(token))
        }else{
            dispatch(push('/login'));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <Layout>
            <Sider collapsed={collapsed} />
            <Layout className={styles.right_layout}>
                <Header toggle={()=>setCollapsed(!collapsed)} collapsed={collapsed} />                
                <div className={styles.right_layout_layout}>
                    <Content>
                        <div style={{height:1200}}>Content</div>
                    </Content>
                    <Footer className={styles.footer}>Copyright © {new Date().getFullYear()} SVOFX.All rights reserved.</Footer>
                </div>
            </Layout>
        </Layout>
    )
}

export default injectIntl(connect()(Home));