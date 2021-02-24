// This file is created to render each component according to the specific routing
import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './App.css'
import CandleStick from './fetch/CandleStick';
import About from './container/about';
import MainPage from './container/mainpage';


class App extends Component {
    
    render() {
        return (
            <div className="App">
                <header>
                    <div className="nav">
                        <NavLink exact to="/home/" activeClassName="selected ls">Home</NavLink>
                        <NavLink to="/about" activeClassName="selected ls">About</NavLink>
                        <NavLink to="/candle-stick" activeClassName="selected">Chart</NavLink>
                    </div>
                </header>

                <Switch>
                    <Route path="/candle-stick" component={CandleStick} />
                    <Route path="/about" component={About} />
                    <Route path="/home" component={MainPage} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </div>
        );
    }
}

export default App;
