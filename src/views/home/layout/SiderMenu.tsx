import React,{useState} from 'react';
import {Menu} from 'antd';
import { IconComponentProps } from '@ant-design/icons/lib/components/AntdIcon';
import { IconDefinition } from '@ant-design/icons-svg/lib/types';
import {Link,withRouter} from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
import { Location } from 'history';
import { connect } from 'react-redux';
import {MyLocation,ConnectInjectIntlPage} from '@/store/types';
import { GlobalState } from '@/store/combine-reducers';

const {SubMenu,Item} = Menu;

interface itemProps{
    path:string,
    title:string,
    children:any[];
    icon:any
}
const renderMenuItem = (item:itemProps)=>(
    <Item
    key={item.path}
    >
        <Link to={item.path}>{item.icon?<item.icon />:null}<span>{item.title}</span></Link>
    </Item>
)

const renderSubMenu = (item:any)=>(
    <SubMenu
    key={item.path}
    title={<span><item.icon /><span>{item.title}</span></span>}
    >
        {item.children.map((i:any)=>renderMenuItem(i))}
    </SubMenu>
)

interface Props{
    location:MyLocation;
    collapsed:boolean;
    menus:any[]
}
const SiderMenu = ({collapsed,menus,location:{pathname}}:Props) =>{

    const rootSubmenuKeys = menus.filter(v=>v.children).map(t=>t.path);

    const [openKeys,setOpenKeys] = useState(rootSubmenuKeys.filter(v=>pathname.indexOf(v)!==-1));

    const onOpenChange=(openkeys:any[])=>{
        const latestOpenKey = openkeys.find((key:string)=>openKeys.indexOf(key)===-1);
        if(rootSubmenuKeys.indexOf(latestOpenKey)===-1){
            setOpenKeys(openkeys)
        }else{
            setOpenKeys([latestOpenKey])
        }
    }
    

    return(
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[pathname]}
          inlineCollapsed={collapsed}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
        >
          {menus.map(v=>v.children?renderSubMenu(v):renderMenuItem(v))}
        </Menu>
    )
}

export default connect(
    ({router:{location}}:GlobalState)=>({
        location
    })
)(SiderMenu);