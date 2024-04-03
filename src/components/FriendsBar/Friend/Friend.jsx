import React from "react";
import style from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={style.friend_wrapper}>
            <img className={style.ava} alt={props.alt} src={props.src}></img>
            <div>
                <b className={style.name}>{props.name}</b>
            </div>
        </div>
    );
};

export default Friend;
