import { connect } from "react-redux";
import UsersPage from "./UsersPage";
import {
    FollowAC,
    UnfollowAC,
    setUsersAC,
    setUsersCountAC,
    setCurrentPageAC,
    getPagesAC,
} from "../../../redux/UsersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pages: state.usersPage.pages,
    };
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
        setUsersCount: (totalUsersCount) => {
            dispatch(setUsersCountAC(totalUsersCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        getPages: () => {
            dispatch(getPagesAC());
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersContainer;
