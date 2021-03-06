import React from "react";
import {Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux'

function PrivateRoute({ children, token, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return !token ? (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { location },
                        }}
                    />
                ) : (
                    children
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
