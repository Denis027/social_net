import React from "react";
import User from "./User/User";
import style from "./UsersPage.module.css";
import Paginator from "../Paginator/Paginator";

const UsersPage = (props) => {
    return (
        <div>
            <div className={style.title}>
                <h1>Users</h1>
                <label>pageSize</label>
                <select
                    value={props.pageSize}
                    onChange={(e) => {
                        console.log(props.pageSize);
                        let newPageSize = Number(e.target.value);
                        props.onPageSizeChange(newPageSize);
                    }}
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
            <div className={style.usersListWrapper}>
                <Paginator
                    pageSize={props.pageSize}
                    setCurrentPage={props.setCurrentPage}
                    onPageChange={props.onPageChange}
                    currentPage={props.currentPage}
                    totalItemCount={props.usersList.totalUsersCount}
                />
            </div>
            <div className={style.usersWrapper}>
                <div className={style.usersItems}>
                    {props.usersList.users.map((user) => (
                        <User
                            key={user.id}
                            name={user.name}
                            id={user.id}
                            followed={user.followed}
                            dispatch={props.dispatch}
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
