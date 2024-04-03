import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post_/Post";

const MyPosts = (props) => {
    let newPostEl = React.createRef();
    const PostsElem = props.profilePage.Posts.map((p) => (
        <Post
            alt={p.ava_alt}
            src={p.ava_src}
            message={p.message}
            likecount={p.likecount}
            name={p.name}
        />
    ));
    let onTextChange = () => {
        let newText = newPostEl.current.value;
        props.onPostChange(newText);
    };
    let addPostButton = () => {
        props.addNewPost();
    };
    return (
        <div className={style.postWrapper}>
            <textarea
                onChange={onTextChange}
                ref={newPostEl}
                className={style.newPost}
                value={props.profilePage.newPostText}
            ></textarea>
            <button onClick={addPostButton} className={style.sendButton}>
                AddPost
            </button>
            {PostsElem}
        </div>
    );
};

export default MyPosts;
