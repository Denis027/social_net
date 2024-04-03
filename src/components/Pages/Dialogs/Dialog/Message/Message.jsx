import React from "react";
import style from "./Messages.module.css";

const Message = (props) => {
    return (
        <div className={style.item} my_message={props.my_message}>
            {props.message}
        </div>
    );
};

export default Message;
