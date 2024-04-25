import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";
import { fishText, userPhoto } from "../../Fish";

const User = (props) => {
    return (
        <div className={style.userWrapper}>
            <NavLink to={"/profile/" + props.id}>
                <div className={style.avaWrapper}>{userPhoto}</div>
            </NavLink>
            {props.followed ? (
                <button
                    onClick={() => props.userUnfollow(props.id)}
                    className={style.button}
                >
                    Unfollow
                </button>
            ) : (
                <button
                    onClick={() => props.userFollow(props.id)}
                    className={style.button}
                >
                    Follow
                </button>
            )}
            <b className={style.name}>{props.name}</b>
            <b className={style.id}>ID:{props.id}</b>
            <div className={style.location}>city: , country:</div>
            <div className={style.status}>{fishText}</div>
        </div>
    );
};

export default User;
