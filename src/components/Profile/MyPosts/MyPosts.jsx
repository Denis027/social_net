import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post_/Post";

const MyPosts = (props) => {
    let newPostEl = React.createRef();
    const PostsElem = props.profilePage.Posts.map((p) => (
        <Post
            key={p.id}
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
                onChange={() => props.onPostChange(newPostEl.current.value)}
                ref={newPostEl}
                className={style.newPost}
                value={props.profilePage.newPostText}
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