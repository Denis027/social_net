import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthMe } from "../../redux/authReducer";
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

export default connect(mapStateToProps, { getAuthMe })(HeaderContainer);
