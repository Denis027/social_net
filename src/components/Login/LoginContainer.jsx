import React from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import getLoginMe from "../../redux/authReducer"
// import { authAPI } from "../../api/authAPI";

const LoginForm = (props) => {
        // console.log(formData)
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name="email" placeholder="Email" component="input" /></div>
            <div><Field name="password" placeholder="Password" component="input" /></div>
            <div><Field name="rememberMe" placeholder="RememberMe" component="input" type="checkbox" />rememberMe</div>
            <button type="submit">Login</button>
            </form>
    );
};

class LoginContainer extends React.Component {
        // eslint-disable-next-line
        constructor(props) {
            super(props);
        }
        componentDidMount = () => {   

        };
        render(){
    const onSubmit = (values) => {
        this.props.getLoginMe(values)
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} getLoginMe={getLoginMe} />
        </div>
    );
};}

export const LoginReduxForm = reduxForm({   form: 'login', })(LoginForm);

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, {getLoginMe,})(LoginContainer);