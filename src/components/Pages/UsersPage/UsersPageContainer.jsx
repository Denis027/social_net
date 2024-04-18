import React from "react";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import {
    onClickFollow,
    onClickUnfollow,
    setUsers,
    setUsersCount,
    setCurrentPage,
    setIsFetching,
} from "../../../redux/usersReducer";
import preloader from "../../../logo.svg";
import { usersAPI } from "../../../api/usersAPI";

class UsersPageContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.setIsFetching(true);
        usersAPI
            .getUsers(this.props.setCurrentPage, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
                // this.props.setUsersCount(resp.data.totalCount);
            });
    };
    render = () => {
        const onPageChange = (page) => {
            this.props.setCurrentPage(page);
            this.props.setIsFetching(true);
            usersAPI.getUsers(page, this.props.pageSize).then((data) => {
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
                // this.props.setUsersCount(resp.data.totalCount);
            });
        };
        return (
            <div>
                {this.props.usersList.isFetching ? (
                    <img alt="Logo_loading" src={preloader}></img>
                ) : (
                    <UsersPage
                        users={this.props.users}
                        usersList={this.props.usersList}
                        onPageChange={onPageChange}
                        onClickFollow={this.props.onClickFollow}
                        onClickUnfollow={this.props.onClickUnfollow}
                        setUsersCount={this.props.setUsersCount}
                    />
                )}
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

export default connect(mapStateToProps, {
    onClickFollow,
    onClickUnfollow,
    setUsers,
    setUsersCount,
    setCurrentPage,
    setIsFetching,
})(UsersPageContainer);
