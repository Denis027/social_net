import { connect } from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state) => {
    return {
        friendsList: state.sideBar.friendsList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
