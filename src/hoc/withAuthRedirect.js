import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export const withAuthRedirect = (Component) => {
    let RedirectContainer = (props) => {
        if (!props.isAuth) return <Navigate to="/login" />;
        return <Component {...props} />;
    };
    return connect(mapStateToPropsForRedirect)(RedirectContainer);
};
