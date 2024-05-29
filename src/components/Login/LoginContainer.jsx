import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import getLoginMePls from "../../redux/authReducer";
// import { authAPI } from "../../api/authAPI";

const LoginForm = (props) => {
    // console.log(formData)

    return (
        <div>
            <div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(authData) => {
                        console.log(authData);
                        props.getLoginMePls(authData);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <Field type="email" name="email"></Field>
                            </div>
                            <div>
                                <Field type="password" name="password"></Field>
                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
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
                <LoginForm getLoginMePls={this.props.getLoginMePls} />
            </div>
        );
    }
}

export default connect(null, { getLoginMePls })(LoginContainer);
