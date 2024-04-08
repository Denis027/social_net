import React from "react";
import UsersPage from "./UsersPage";
import axios from "axios";
import { connect } from "react-redux";
import {
    onClickFollow,
    onClickUnfollow,
    setUsers,
    setUsersCount,
    setCurrentPage,
    setIsFetching,
} from "../../../redux/UsersReducer";
import preloader from "../../../logo.svg"

class UsersAPIComponent extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.setIsFetching(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((resp) => {
                this.props.setUsers(resp.data.items);
                this.props.setIsFetching(false);
                // this.props.setUsersCount(resp.data.totalCount);
                console.log(resp.data.items, "DidMount");
            });
    };

    render = () => {
        const onPageChange = (page) => {
            this.props.setCurrentPage(page);
            this.props.setIsFetching(true)
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
                )
                .then((resp) => {
                    this.props.setUsers(resp.data.items);
                    this.props.setIsFetching(false)
                    // this.props.setUsersCount(resp.data.totalCount);
                    console.log(resp.data.items, "onPageChange");
                });
        };

        return (
            <div>
                {this.props.usersList.isFetching ?<img alt="Logo_loading" src={preloader}></img> :<UsersPage
                    users={this.props.users}
                    usersList={this.props.usersList}
                    onPageChange={onPageChange}
                    onClickFollow={this.props.onClickFollow}
                    onClickUnfollow={this.props.onClickUnfollow}
                    setUsersCount={this.props.setUsersCount}
                />}
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

const UsersContainer = connect(
    mapStateToProps,
    {
        onClickFollow,
        onClickUnfollow,
        setUsers,
        setUsersCount,
        setCurrentPage,
        setIsFetching,
    }
)(UsersAPIComponent);

export default UsersContainer;
