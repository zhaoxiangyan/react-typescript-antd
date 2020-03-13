import React from 'react';
import {Layout} from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons'
import styles from './index.module.less';

const {Header} = Layout;

interface Props{
    collapsed:boolean;
    toggle:()=>void;
}

const HeaderComponent = ({collapsed,toggle}:Props)=>{
    return(
        <Header className={styles.header}>
            {collapsed?<MenuUnfoldOutlined onClick={toggle} style={{fontSize:20}} />:<MenuFoldOutlined onClick={toggle} style={{fontSize:20}} />}
        </Header>
    )
}

export default HeaderComponent;