import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginMe, selectIsAuth } from "../../redux/slices/authSlice";
import { useFormik } from "formik";

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (authData) => {
            props.onSendData(authData);
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

const LoginContainer = () => {
    const dispatch = useDispatch();
    // const isAuth = useSelector(selectIsAuth);

    const onSendData = (authData) => {
        dispatch(getLoginMe(authData));
    };

    // if (isAuth) {
    //     <redirect to={"/profile"} />;
    // }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSendData={onSendData} />
        </div>
    );
};

export default LoginContainer;
