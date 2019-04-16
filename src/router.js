import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import indexRoutes from './routes/index'
import CheckLogin from './views/ProfilePage/checkLogin'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <CheckLogin>
      <Switch>
        {
          indexRoutes.map((prop,key)=>{
             return <Route path={prop.path} key={key} component={prop.component} ></Route>
          })
        }

      </Switch>
      </CheckLogin>
    </Router>
  );
}

export default RouterConfig;
