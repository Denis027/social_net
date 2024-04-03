import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <img
                className={style.Avatarka}
                alt={props.alt}
                src={props.src}
            ></img>
            <h3 className={style.name}>{props.name}</h3>
            <div className={style.item}>{props.message}</div>
            <button className={style.likeButton}>Like {props.likecount}</button>
        </div>
    );
};

export default Post;
