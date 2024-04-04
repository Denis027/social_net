import React from "react";
import style from "./UsersList.module.css";

const UsersList = (props) => {
    return <div className={style.usersListWrapper}>{props.pageNumber}</div>;
};

export default UsersList;
