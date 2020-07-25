import React from "react";
import {
    BrowserRouter as Router,
    // Link,
    Route,
    Switch,
} from "react-router-dom";
import DefaultLayout from "./views/layout/DefaultLayout";
import Login from "./views/components/pages/Login";
import PrivateRoute from './views/rounters/PrivateRoute'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <PrivateRoute path="/">
                    <DefaultLayout/>
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;