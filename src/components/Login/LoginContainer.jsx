import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import getLoginMe from "../../redux/authReducer";
// import { authAPI } from "../../api/authAPI";

const LoginForm = (props) => {
    // console.log(formData)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" placeholder="email" component="input" />
            </div>
            <div>
                <Field
                    name="password"
                    placeholder="password"
                    component="input"
                    type="password"
                />
            </div>
            <div>
                <Field
                    name="rememberMe"
                    placeholder="rememberMe"
                    component="input"
                    type="checkbox"
                />
                rememberMe
            </div>
            <button action="submit" type="submit">
                Login
            </button>
        </form>
    );
};

class LoginContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    onSubmit = (authData) => {
        this.props.getLoginMe(authData);
    };

    componentDidMount = () => {};

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default connect(null, { getLoginMe })(LoginContainer);
