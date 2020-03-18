import React from 'react';
import {Layout} from 'antd';
import styles from './index.module.less';
import SiderMenu from './SiderMenu';

const {Sider} = Layout;

interface Props{
    collapsed:boolean;
    menus:any[]
}
const SiderComponent = ({collapsed,menus}:Props)=>{

    return(
        <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="240"
        breakpoint="lg"
        className={styles.sider}
        >
            <SiderMenu collapsed={collapsed} menus={menus} />
        </Sider>
    )
}

export default SiderComponent;