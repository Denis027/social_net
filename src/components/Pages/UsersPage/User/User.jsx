import React from "react";
import style from "./User.module.css";

const User = (props) => {
    return (
        <div className={style.userWrapper}>
            <img
                className={style.avatarka}
                alt="users_photo"
                src="https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg"
            ></img>
            {props.followed ? (
                <button
                    onClick={() => {
                        props.onClickUnfollow(props.id);
                    }}
                    className={style.button}
                >
                    Unfollow
                </button>
            ) : (
                <button
                    onClick={() => {
                        props.onClickFollow(props.id);
                    }}
                    className={style.button}
                >
                    Follow
                </button>
            )}

            <b className={style.name}>{props.name}</b>
            <b className={style.id}>ID:{props.id}</b>
            <div className={style.location}>city: , country:</div>

            <div className={style.status}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, id quos iure provident sint dolores eaque, esse dolor
                corrupti officia totam tenetur cupiditate vel, aperiam
                perferendis voluptates officiis iusto delectus?
            </div>
        </div>
    );
};

export default User;
