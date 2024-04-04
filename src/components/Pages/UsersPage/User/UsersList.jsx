import React from "react";
import style from "./UsersList.module.css";

const UsersList = (props) => {
    return (
        <div className={style.usersListWrapper}>
            <div
                onClick={() => props.onPageChange(props.page)}
                className={
                    props.page === props.currentPage
                        ? style.usersListCurrentItem
                        : style.usersListItem
                }
            >
                {props.page}
            </div>
        </div>
    );
};

export default UsersList;
