import React from 'react';
import {AppBar, MuiThemeProvider} from 'material-ui';
import AppNav from './components/appNav';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import Products from './components/products';
import Login from './components/Login';

class Root extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppNav/>   
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/aboutUs' component={AboutUs}/>
                        <Route path='/products' component={Products}/>
                        <Route path='/login' component={Login}/>
                    </Switch>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Root; 
