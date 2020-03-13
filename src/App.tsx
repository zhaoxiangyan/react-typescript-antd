import React from 'react';
import '@/style/App.less';
import {ConfigProvider} from 'antd';
import {IntlProvider} from 'react-intl';
import {getAntdLocale,getMessagesLocale,getLocaleString} from '@/locale';
import { GlobalState } from '@/store/combine-reducers';
import {connect} from 'react-redux';
import Routes from './routes';

interface PageProps{
    lang:string,
}
const Page =({lang}:PageProps)=>{
    return(
        <ConfigProvider locale={getAntdLocale(lang)}>
            <IntlProvider locale={getLocaleString(lang)} messages={getMessagesLocale(lang)}>
                <Routes />
            </IntlProvider>
        </ConfigProvider>
    )
}

export default connect(
    ({client:{lang}}:GlobalState)=>({
        lang
    }),
)(Page);