import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./views/pages/Home";
import DefaultLayout from "./views/componets/layout/DefaultLayout";

function App() {
    return (
        <Router>
            <Switch>
                <DefaultLayout/>
            </Switch>
        </Router>
    );
}

export default App;