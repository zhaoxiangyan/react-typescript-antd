import React from 'react';
import {Button,Dropdown,Menu} from 'antd';
import {ClickParam} from 'antd/lib/menu'
import {DownOutlined} from '@ant-design/icons';
import {injectIntl,FormattedMessage} from 'react-intl';
import {action as clientActions} from '@/store/client';
import {ConnectInjectIntlPage} from '@/store/types'
import { GlobalState } from '@/store/combine-reducers';
import {connect} from 'react-redux';

interface SwitchLanguageProps extends ConnectInjectIntlPage{
  lang:string
}

const SwitchLanguage = ({lang,dispatch,intl:{messages},}:SwitchLanguageProps) => {

    // 国际化
    const langClick = (e:ClickParam) => {
      // 局部刷新
      dispatch(clientActions.setLanguage(e.key));
    };
    
    return (
        <Dropdown 
        overlay={
            <Menu onClick={langClick}>
                {lang !== 'zh_CN' && <Menu.Item key="zh_CN">简体中文</Menu.Item>}
                {lang !== 'en_US' && <Menu.Item key="en_US">English</Menu.Item>}
                {/* {lang !== 'zh_TW' && <Menu.Item key="zh_TW">繁体中文</Menu.Item>} */}
                {lang !== 'ja_JP' && <Menu.Item key="ja_JP">日本語</Menu.Item>}
            </Menu>
        }
        >
            <Button size="small"><FormattedMessage id="title" /><DownOutlined /></Button>
        </Dropdown>
    );
  
}

export default injectIntl(connect(
  ({client:{lang}}:GlobalState)=>({
    lang
  })
)(SwitchLanguage));