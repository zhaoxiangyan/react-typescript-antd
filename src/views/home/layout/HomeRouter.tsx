import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom';

interface Props {
    routes:{
        menus:any[];
        other:any[];
        [key:string]:any[]
    }
}
const HomeRouter = ({routes}:Props)=>{

    const {menus} = routes;

    return(
        <Switch>
            <Redirect 
            from="/home" 
            to={menus[0]?(menus[0].children?menus[0].children[0].path:menus[0].path):'/404'} 
            exact 
            />
            {Object.values(routes).map((v:any)=>
                v.map((a:any)=>{
                    const route =(item:any) => <Route key={item.path} path={item.path} component={item.component} />;
                    return a.children?a.children.map((t:any)=>route(t)):route(a) 
                }) 
            )}
            <Route render={()=><Redirect to="/404" />} />
        </Switch>
    )
}

export default HomeRouter;