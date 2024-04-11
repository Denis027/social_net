import React from "react";
import User from "./User/User";
import style from "./UsersPage.module.css";
import UsersList from "./UsersList";

const UsersPage = (props) => {
    const allPages = [];
    let shownPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let currentPageCopy = props.usersList.currentPage;
    let minPage = 1;
    let maxPage = 10;
    let totalPagesCount = Math.ceil(
        props.usersList.totalUsersCount / props.usersList.pageSize
    );

    for (let i = 1; i <= totalPagesCount; i++) {
        allPages.push(i);
    }
    const pagesGenPrev = () => {
        shownPages = [];
        minPage = minPage - 5;
        maxPage = maxPage - 5;
        for (let i = minPage; i <= maxPage; i++) {
            shownPages.push(i);
        }
        props.onPageChange(minPage);
        return console.log(shownPages);
    };

    const pagesGenNext = (newMinPage) => {
        props.onPageChange(currentPageCopy);
        shownPages = [];
        minPage = newMinPage + 10;
        maxPage = minPage + 10;
        for (let i = minPage; i <= maxPage; i++) {
            shownPages.push(i);
        }
        return console.log(shownPages, minPage);
    };

    return (
        <div>
            <div className={style.title}>
                <h1>Users</h1>
            </div>
            <div className={style.usersListWrapper}>
                <div onClick={() => pagesGenPrev()}>prev</div>
                {shownPages.map((page) => (
                    <UsersList
                        onPageChange={props.onPageChange}
                        currentPage={props.usersList.currentPage}
                        page={page}
                        key={page}
                    />
                ))}
                <div onClick={() => pagesGenNext(minPage)}>next</div>
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
    );
};

export default UsersPage;
