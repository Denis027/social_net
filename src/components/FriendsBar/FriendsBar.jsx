import React from "react";
import Friend from "./Friend/Friend";
import style from "./FriendsBar.module.css";

const FriendsBar = (props) => {
    let friendEl = props.friendsList.map((f) => (
        <Friend
            key={f.id}
            alt={f.ava_alt}
            src={f.ava_src}
            name={f.name}
            id={f.id}
        />
    ));
    return (
        <div className={style.FriendsBar_wrapper}>
            <div className={style.friendsTitle}>
                <b>MyFriends</b>
            </div>
            <div className={style.friends}>{friendEl}</div>
        </div>
    );
};

export default FriendsBar;
