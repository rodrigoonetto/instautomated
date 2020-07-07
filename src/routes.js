import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Tools from './pages/Tools'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'



export default function Routes() {
    return (
        <BrowserRouter>
            
            <Switch> 
                <Route path='/' exact component={Home} />
                <Route path='/tools' exact component={Tools} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
            </Switch>
        </BrowserRouter>
    );
}