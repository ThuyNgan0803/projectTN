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
import { Carousel } from "antd";
import Carousels from "./views/components/carousel/Carousels";

function App() {
    return (
        <Router>
            <Switch>
                <Carousels/>
            {/* <DefaultLayout/> */}
                {/* <Route path="/login">
                    <Login />
                </Route>
                <PrivateRoute path="/">
                    <DefaultLayout/>
                </PrivateRoute> */}
            </Switch>
        </Router>
    );
}

export default App;