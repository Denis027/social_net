import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthMe, getLogoutMe } from "../../redux/authReducer";
import style from "./Header.module.css";

class HeaderContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAuthMe();
    }
    render() {
        return (
            <div className={style.header}>
                <Header getLogoutMe={this.props.getLogoutMe} isAuth={this.props.authUserData.isAuth} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authUserData: state.auth,
    };
};

export default connect(mapStateToProps, { getAuthMe, getLogoutMe })(
    HeaderContainer
);
