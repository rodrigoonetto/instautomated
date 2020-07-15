import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Tools from './pages/Tools'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import TopNav from './components/TopNav'
import BottomFooter from './components/BottomFooter'
import Settings from './pages/Settings'
import Welcome from './pages/Welcome'




export default function Routes() {
    return (
        <BrowserRouter>
            <TopNav />
            <Switch> 
                <Route path='/' exact component={Home} />
                <Route path='/tools' exact component={Tools} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/settings' exact component={Settings} />
                <Route path='/welcome' exact component={Welcome} />


            </Switch>
            <BottomFooter />
        </BrowserRouter>
    );
}