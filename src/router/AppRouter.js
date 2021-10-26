import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContex';

import ChatPages from '../pages/ChatPages';

import { AuthRouter } from './AuthRouter';
import { PrivedRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {auth,checkToken} = useContext(AuthContext);

    useEffect(()=>{
      checkToken();
    },[checkToken])

  if (auth.checking){
    return <h1>Espere por favor</h1>
  }
    return (
        <Router>
        <div>


          <Switch>
            {/* <Route path="/auth" component= {AuthRouter}/> */}
            <PublicRoute isAuthenticated={auth.logged} path="/auth" component={AuthRouter}/>
            <PrivedRoute isAuthenticated={auth.logged} exact  path="/" component={ChatPages}/>
            {/* <Route exact path = "/" component={ChatPages}/> */}

            <Redirect to = "/"/>
          </Switch>
        </div>
      </Router>
    )
}
