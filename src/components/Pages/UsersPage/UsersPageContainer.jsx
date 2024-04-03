import { connect } from "react-redux";
import UsersPage from "./UsersPage";
import { FollowAC, UnfollowAC, setUsersAC } from "../../../redux/UsersReducer";

const mapStateToProps = (state) => {
    return { users: state.usersPage.users };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickFollow: (userId) => {
            dispatch(FollowAC(userId));
        },
        onClickUnfollow: (userId) => {
            dispatch(UnfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersContainer;
