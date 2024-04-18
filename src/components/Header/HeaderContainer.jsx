import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import style from "./Header.module.css";
import { usersAPI } from "../../api/usersAPI";

class HeaderContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        usersAPI.getAuthMe().then((data) => {
            console.log(data);
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data);
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
