import React from "react";
import style from "./Post.module.css";
import { nanoid } from "@reduxjs/toolkit";

const Post = (props) => {
    return (
        <div className={style.post}>
            <img
                className={style.Avatarka}
                alt={props.alt}
                src={props.src}
                key={nanoid}
            ></img>
            <h3 className={style.name}>{props.name}</h3>
            <div className={style.item}>{props.message}</div>
        </div>
    );
};

export default Post;
