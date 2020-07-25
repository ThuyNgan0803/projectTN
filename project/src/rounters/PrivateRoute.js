import React from "react";
import {Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux'

function PrivateRoute({ children, token, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { location },
                        }}
                    />
                );
            }}
        />
    );
}

function mapStateToProps (state) {
    return {
        // isLoggedIn: state.login.isLoggedIn,
    }
}

export default connect(mapStateToProps)(PrivateRoute)
