import React from "react";
import style from "./Messages.module.css";
import { MessageDataType } from "../../../../redux/slices/dialogsSlice";

const Message: React.FC<MessageDataType> = (props) => {
    return (
        <div className={style.item} data-my_message={props.my_message}>
            {props.message}
        </div>
    );
};

export default Message;
