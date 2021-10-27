import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/cadastro">
                        <Cadastro />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;