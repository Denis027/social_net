import React from "react";
import User from "./User/User";
import style from "./UsersPage.module.css";
import UsersList from "./UsersList";
import Paginator from "../Paginator/Paginator";

const UsersPage = (props) => {
  return (
    <div>
      <div className={style.title}>
        <h1>Users</h1>
      </div>
      <div className={style.usersListWrapper}>
        <Paginator
          onPageChange={props.onPageChange}
          currentPage={props.usersList.currentPage}
          totalItemCount={props.usersList.totalUsersCount}
        />
      </div>
      <div className={style.usersWrapper}>
        <div className={style.usersItems}>
          {props.users.map((user) => (
            <User
              key={user.id}
              name={user.name}
              id={user.id}
              followed={user.followed}
              userUnfollow={props.userUnfollow}
              userFollow={props.userFollow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
