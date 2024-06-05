import React from "react";
import { connect, useDispatch } from "react-redux";
import getLoginMe from "../../redux/authReducer";
import { useFormik } from "formik";

const LoginForm = (props) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
            dispatch(props.getLoginMe(values));
        },
    });

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
                <LoginForm getLoginMe={this.props.getLoginMe} />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth,
    };
};

export default connect(mapStateToProps, { getLoginMe })(LoginContainer);
