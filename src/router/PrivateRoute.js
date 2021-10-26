import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivedRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {
    return (
        <Route {...rest}
        component ={(props)=>(
            ( isAuthenticated)
            ?<Component {...props}/>
            :<Redirect to="/auth"/>
        )}
        />
    )
}
