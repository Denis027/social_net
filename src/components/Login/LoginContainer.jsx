import React from "react";
import { Field, Form, Formik } from "formik";
import getLoginMePls from "../../redux/authReducer";
import { useDispatch, useEffect, connect } from "react-redux";
// import { authAPI } from "../../api/authAPI";

const LoginForm = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(props.getLoginMePls());
    });
    return (
        <div>
            <div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(authData) => {
                        console.log(authData);
                        // authAPI.loginMe(
                        //     authData.email,
                        //     authData.password,
                        //     authData.rememberMe
                        // );
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

const LoginContainer = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm getLoginMePls={props.getLoginMePls} />
        </div>
    );
};

export default connect(null, { getLoginMePls })(LoginContainer);
