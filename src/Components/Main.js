import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

class Main extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route exact path="/login" component={LoginPage}></Route>
                    <Redirect to="/"></Redirect>
                </Switch>
            </>
        )
    }
}

export default Main;