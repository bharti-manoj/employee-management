import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Employees from '../../view/Employees'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Employees} />
            </Switch>
        </Router>
    );
}

export default App;
