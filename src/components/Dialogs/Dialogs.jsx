import Dialog from "./Dialog/Dialog";
import style from "./Dialogs.module.css";
import Message from "./Dialog/Message/Message";
import React from "react";

const Dialogs = (props) => {
    let newMessageItem = React.createRef();
    let dialogItem = props.dialogsPage.dialogsData.map((d) => (
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
    let messageItem = props.dialogsPage.messagesData.map((m) => (
        <Message key={m.id} my_message={m.my_message} message={m.message} />
    ));
    let onTextChange = () => {
        let newMessageText = newMessageItem.current.value;
        props.onMessageChange(newMessageText);
    };
    let onSendButton = () => {
        props.sendNewMessage();
    };
    return (
        <div>
            <h1 className={style.title}>Dialogs</h1>
            {
                <div className={style.dialogs}>
                    <div className={style.dialogItems}>{dialogItem}</div>
                    <div className={style.messages}>
                        {messageItem}
                        <div className={style.send_message}>
                            <textarea
                                onChange={onTextChange}
                                ref={newMessageItem}
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
            }
        </div>
    );
};

export default Dialogs;
