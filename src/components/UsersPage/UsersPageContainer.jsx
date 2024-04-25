import React from "react";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import { userFollow, userUnfollow, getUsers } from "../../redux/usersReducer";
import Preloader from "../Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersPageContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.getUsers(
            this.props.usersList.currentPage,
            this.props.usersList.pageSize
        );
    };
    render = () => {
        const onPageChange = (page) => {
            this.props.getUsers(page, this.props.usersList.pageSize);
        };
        return (
            <div>
                {this.props.usersList.isFetching ? (
                    <Preloader />
                ) : (
                    <UsersPage
                        users={this.props.users}
                        usersList={this.props.usersList}
                        onPageChange={onPageChange}
                        userFollow={this.props.userFollow}
                        userUnfollow={this.props.userUnfollow}
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { userFollow, userUnfollow, getUsers })
)(UsersPageContainer);
