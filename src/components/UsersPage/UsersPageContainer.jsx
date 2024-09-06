import React, { useEffect } from "react";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import { userFollow, userUnfollow, getUsers } from "../../redux/usersReducer";
import Preloader from "../Preloader";
import { compose } from "redux";

const UsersPageContainer = ({ getUsers, users, usersList, ...props }) => {
  useEffect(() => {
    getUsers(usersList.currentPage, usersList.pageSize);
  }, [getUsers, usersList.currentPage, usersList.pageSize]);

  const onPageChange = (page) => {
    getUsers(page, usersList.pageSize);
  };

  return (
    <div>
      {usersList.isFetching ? (
        <Preloader />
      ) : (
        <UsersPage
          users={users}
          usersList={usersList}
          onPageChange={onPageChange}
          userFollow={props.userFollow}
          userUnfollow={props.userUnfollow}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersList: state.usersPage.usersList,
  };
};

export default compose(
  connect(mapStateToProps, { userFollow, userUnfollow, getUsers })
)(UsersPageContainer);
