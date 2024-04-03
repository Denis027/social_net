import React from "react";
import Ava from "./Ava/Ava";
import Discription from "./Discription/Discription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div className={style.Profile_content}>
            <div className={style.title}>
                <h1>Profile</h1>
            </div>
            <div className={style.AvaDis}>
                <Ava />
                <Discription />
            </div>
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
