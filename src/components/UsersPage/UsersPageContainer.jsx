import React, { useEffect } from "react";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import { userFollow, userUnfollow, getUsers } from "../../redux/usersReducer";
import Preloader from "../Preloader";
import { compose } from "redux";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const UsersPageContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.usersList.currentPage, props.usersList.pageSize);
  }, []);

  const onPageChange = (page) => {
    console.log(page);
    props.getUsers(page, props.usersList.pageSize);
  };

  return (
    <div>
      {props.usersList.isFetching ? (
        <Preloader />
      ) : (
        <UsersPage
          users={props.users}
          usersList={props.usersList}
          onPageChange={onPageChange}
          userFollow={props.userFollow}
          userUnfollow={props.userUnfollow}
          setUsersCount={props.setUsersCount}
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
  // withAuthRedirect,
  connect(mapStateToProps, { userFollow, userUnfollow, getUsers })
)(UsersPageContainer);
