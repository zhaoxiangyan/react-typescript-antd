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

export const asyncComponent = (component:any) => {
    return Loadable({
      loader: component,
      loading: Loading,
    });
  };
  
  const TestOne = asyncComponent(()=>import(/* webpackChunkName: "TestOne" */ '@/views/test/TestOne'));
  const Login = asyncComponent(() => import(/* webpackChunkName: "Login" */ '@/views/page/Login/index'));
  const NotFound = asyncComponent(()=>import(/* webpackChunkName: "NotFound" */ '@/views/page/NotFound'));
  const Home = asyncComponent(()=>import(/* webpackChunkName: "Home" */ '@/views/home'));
  
  interface routeProps extends ConnectInjectIntlPage{
      resubmit:boolean
  }

  const Routes = ({intl:{messages,formatMessage},dispatch,resubmit}:routeProps)=>{

    useEffect(()=>{
      resubmit&&message.warn('Submit multiple times')
    },[resubmit])

    return (
      <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" render={()=><Redirect to="/login" push />} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
            <Route path="/test1" component={TestOne} />
        </Switch>
      </ConnectedRouter>
    );
  }
export default injectIntl(connect(
    ({client:{resubmit}}:GlobalState)=>({
        resubmit
    }),
)(Routes));