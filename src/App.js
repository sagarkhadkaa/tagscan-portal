import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/home";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import TestBackend from "./components/testBackend";
import TestForm from "./components/testForm";

function App() {
    return (
        <div className="content">
            <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={SignupForm} />
                <Route path="/test" component={TestForm} />
                <Route path="/testBackend" component={TestBackend} />
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    );
}

export default App;
