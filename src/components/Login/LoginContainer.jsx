import React from "react";
import { connect } from "react-redux";
// import getLoginMe from "../../redux/authReducer";
import { useFormik } from "formik";
import { authAPI } from "../../api/authAPI";

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (authData) => {
            console.log(authData);
            authAPI.loginMe(authData.email, authData.password);
        },
    });

    // useEffect(() => {
    //     dispatch(props.getLoginMePls());
    // });
    return (
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
    );
};

class LoginContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidUpdate = () => {};

    render = () => {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth,
    };
};

export default connect(mapStateToProps, {})(LoginContainer);
