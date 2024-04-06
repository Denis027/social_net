import React from "react";
import UsersPage from "./UsersPage";
import axios from "axios";
import { connect } from "react-redux";
import {
    FollowAC,
    UnfollowAC,
    setUsersAC,
    setUsersCountAC,
    setCurrentPageAC,
} from "../../../redux/UsersReducer";

class UsersAPIComponent extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((resp) => {
                this.props.setUsers(resp.data.items);
                // this.props.setUsersCount(resp.data.totalCount);
                console.log(resp.data.items, "DidMount");
            });
    };

    render = () => {
        const onPageChange = (page) => {
            this.props.setCurrentPage(page);
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
                )
                .then((resp) => {
                    this.props.setUsers(resp.data.items);
                    // this.props.setUsersCount(resp.data.totalCount);
                    console.log(resp.data.items, "onPageChange");
                });
        };

        return (
            <div>
                <UsersPage
                    users={this.props.users}
                    usersList={this.props.usersList}
                    onPageChange={onPageChange}
                    onClickFollow={this.props.onClickFollow}
                    onClickUnfollow={this.props.onClickUnfollow}
                    setUsersCount={this.props.setUsersCount}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersList: state.usersPage.usersList,
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
    };
};

const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersAPIComponent);

export default UsersContainer;
