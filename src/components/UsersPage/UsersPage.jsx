import React from "react";
import User from "./User/User";
import style from "./UsersPage.module.css";
import UsersList from "./UsersList";

const UsersPage = (props) => {
    let shownPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div>
            <div className={style.title}>
                <h1>Users</h1>
            </div>
            <div className={style.usersListWrapper}>
                {shownPages.map((page) => (
                    <UsersList
                        onPageChange={props.onPageChange}
                        currentPage={props.usersList.currentPage}
                        page={page}
                        key={page}
                    />
                ))}
            </div>
            <div className={style.usersWrapper}>
                <div className={style.usersItems}>
                    {props.users.map((user) => (
                        <User
                            key={user.id}
                            // alt={user.ava_alt}
                            // src={user.ava_src}
                            name={user.name}
                            // location={user.location}
                            id={user.id}
                            // status={user.status}
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
