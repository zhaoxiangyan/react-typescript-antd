import React, { useEffect } from 'react';
import {Spin,message} from 'antd';
import {Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import {ConnectInjectIntlPage} from '@/store/types';
import {injectIntl} from 'react-intl';
import {connect} from 'react-redux';
import { GlobalState } from '@/store/combine-reducers';
import { ConnectedRouter } from 'connected-react-router';
import {history} from '@/store';



const Loading = () => (
    <div style={{ paddingTop: 100, textAlign: 'center' }}>
      <Spin size='large' />
    </div>
  );

  const asyncComponent = (component:any) => {
    return Loadable({
      loader: component,
      loading: Loading,
    });
  };
  
  const TestOne = asyncComponent(()=>import(/* webpackChunkName: "TestOne" */ '@/views/test/TestOne'));
  const Login = asyncComponent(() => import(/* webpackChunkName: "Login" */ '@/views/page/Login/index'));
  
  interface routeProps extends ConnectInjectIntlPage{
      resubmitWarn:boolean
  }

  const Routes = ({intl:{messages,formatMessage},dispatch,resubmitWarn}:routeProps)=>{

    useEffect(()=>{
      resubmitWarn&&message.warn('Submit multiple times')
    },[resubmitWarn])

    return (
      <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" render={()=><Redirect to="/login" push />} />
            <Route path="/login" component={Login} />
            <Route path="/test1" component={TestOne} />
        </Switch>
      </ConnectedRouter>
    );
  }
export default injectIntl(connect(
    ({client:{resubmitWarn}}:GlobalState)=>({
        resubmitWarn
    }),
)(Routes));