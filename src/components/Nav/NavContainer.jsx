import { connect } from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state) => {
    return {
        friendsList: state.sideBar.friendsList,
    };
};

const NavContainer = connect(mapStateToProps, {})(Nav);

export default NavContainer;
