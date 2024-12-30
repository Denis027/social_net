import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post_/Post";
import { nanoid } from "@reduxjs/toolkit";

const MyPosts = (props) => {
    let newPostEl = React.createRef();
    const PostsElem = props.posts.map((p) => (
        <Post
            key={nanoid()}
            alt={p.ava_alt}
            src={p.ava_src}
            message={p.message}
            likecount={p.likecount}
            name={p.name}
        />
    ));

    return (
        <div className={style.postWrapper}>
            <textarea
                name="newPostText"
                onChange={() => props.onPostChange(newPostEl.current.value)}
                ref={newPostEl}
                className={style.newPost}
                value={props.newPostText}
            ></textarea>
            <button
                onClick={() => props.addNewPost()}
                className={style.sendButton}
            >
                AddPost
            </button>
            {PostsElem}
        </div>
    );
};

export default MyPosts;
