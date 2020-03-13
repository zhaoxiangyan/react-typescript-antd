import React from 'react';
import {Layout} from 'antd';
import styles from './index.module.less';
import SiderMenu from './SiderMenu';

const {Sider} = Layout;

interface Props{
    collapsed:boolean
}
const SiderComponent = ({collapsed}:Props)=>{

    return(
        <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="240"
        breakpoint="lg"
        collapsedWidth="70"
        className={styles.sider}
        >
            <SiderMenu collapsed={collapsed} />
        </Sider>
    )
}

export default SiderComponent;