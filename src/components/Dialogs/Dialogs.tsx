import Dialog from "./Dialog/Dialog.tsx";
import style from "./Dialogs.module.css";
import Message from "./Dialog/Message/Message.tsx";
import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { DialogsPageType } from "../../redux/slices/dialogsSlice.ts";

type PropsType = {
    dialogsPage: DialogsPageType;
    sendMessage: () => void;
    updateMessage: (newMessageText: string) => void;
};

const Dialogs: React.FC<PropsType> = ({
    dialogsPage,
    sendMessage,
    updateMessage,
}) => {
    const dialogItem = dialogsPage.dialogsData.map((d) => (
        <Dialog
            ava_alt={d.ava_alt}
            ava_src={d.ava_src}
            name={d.name}
            id={d.id}
            key={nanoid()}
            message={d.message}
        />
    ));

    const messageItem = dialogsPage.messagesData.map((m) => (
        <Message
            key={nanoid()}
            id={m.id}
            my_message={m.my_message}
            message={m.message}
        />
    ));

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
                                onChange={(e) => {
                                    updateMessage(e.target.value);
                                }}
                                className={style.text}
                                value={dialogsPage.newMessageText}
                            ></textarea>
                            <button
                                onClick={sendMessage}
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
