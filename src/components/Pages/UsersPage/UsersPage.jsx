import React from "react";
import User from "./User/User";
import style from "./UsersPage.module.css";

const UsersPage = (props) => {
    const pages = [];
    let totalPagesCount = Math.ceil(
        props.usersList.totalUsersCount / props.usersList.pageSize
    );
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                <div className={style.title}>
                    <h1>Users</h1>
                </div>
                <div className={style.usersListWrapper}>
                    {pages.map((page) => (
                        <div key={page} className={style.usersListItemWrapper}>
                            <div
                                onClick={() => {
                                    props.onPageChange(page);
                                }}
                                className={
                                    page === props.usersList.currentPage
                                        ? style.usersListCurrentItem
                                        : style.usersListItem
                                }
                            >
                                {page}
                            </div>
                        </div>
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
                                onClickUnfollow={props.onClickUnfollow}
                                onClickFollow={props.onClickFollow}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
