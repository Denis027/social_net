import React from "react";
import style from "./UsersList.module.css";

const UsersList = (props) => {
    return (
        <div key={props.key} className={style.usersListItemWrapper}>
            <div
                onClick={() => {
                    props.onPageChange(props.page);
                }}
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
