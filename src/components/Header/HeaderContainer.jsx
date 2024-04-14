import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import axios from "axios";
import style from "./Header.module.css";

class HeaderContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((resp) => {
                if (resp.data.resultCode === 0) {
                    this.props.setAuthUserData(resp.data.data);
                    console.log(this.props.authUserData);
                    console.log(resp.data);
                }
            });
    }
    render() {
        return (
            <div className={style.header}>
                <Header {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authUserData: state.auth,
    };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
