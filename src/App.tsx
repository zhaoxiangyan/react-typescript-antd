import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.less';
import {ConfigProvider} from 'antd';
import {IntlProvider} from 'react-intl';
import {getAntdLocale,getMessagesLocale,getLocaleString} from '@/locale';
import { GlobalState } from '@/store/combine-reducers';
import {connect} from 'react-redux';
import TestOne from '@/views/test/TestOne';

interface PageProps{
    lang:string,
}
const Page =(props:PageProps)=>{
    return(
        <ConfigProvider locale={getAntdLocale(props.lang)}>
            <IntlProvider locale={getLocaleString(props.lang)} messages={getMessagesLocale(props.lang)}>
                <Router>
                    <Switch>
                        <Route exact path="/" render={()=><Redirect to="/test1" push />} />
                        <Route path="/test1" component={TestOne} />
                    </Switch>
                </Router>
            </IntlProvider>
        </ConfigProvider>
    )
}

export default connect(
    ({client:{lang}}:GlobalState)=>({
        lang
    }),
)(Page);