import React from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import DefaultLayout from "./views/layout/DefaultLayout";

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