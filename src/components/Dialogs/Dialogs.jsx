import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Dialog/Message/Message";
import React from "react";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let dialogEl = props.dialogsPage.dialogsData.map((d) => (
        <Dialog
            my_message={d.my_message}
            alt={d.ava_alt}
            src={d.ava_src}
            name={d.name}
            id={d.id}
            key={d.id}
            message={d.message}
        />
    ));
    let messageEl = props.dialogsPage.messagesData.map((m) => (
        <Message key={m.id} my_message={m.my_message} message={m.message} />
    ));
    let onTextChange = () => {
        let newMessageText = newMessageElement.current.value;
        props.onMessageChange(newMessageText);
    };
    let onSendButton = () => {
        props.sendNewMessage();
    };
    return (
        <div>
            <h1 className={style.title}>Dialogs</h1>
            {props.isAuth ? (
                <div className={style.dialogs}>
                    <div className={style.dialogItems}>{dialogEl}</div>
                    <div className={style.messages}>
                        {messageEl}
                        <div className={style.send_mess}>
                            <textarea
                                onChange={onTextChange}
                                ref={newMessageElement}
                                className={style.text}
                                value={props.dialogsPage.newMessageText}
                            ></textarea>
                            <button
                                onClick={onSendButton}
                                className={style.sendButton}
                            >
                                send
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    );
};

export default Dialogs;
