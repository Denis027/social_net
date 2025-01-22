import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialog.module.css";
import { nanoid } from "@reduxjs/toolkit";
import { DialogsDataType } from "../../../redux/slices/dialogsSlice";

const Dialog: React.FC<DialogsDataType> = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id}>
            <div className={style.dialog_wrapper}>
                <img
                    className={style.Avatarka}
                    alt={props.ava_src}
                    src={props.ava_src}
                    id={props.id}
                    key={nanoid()}
                ></img>
                <div>
                    <b className={style.name}>{props.name}</b>
                    <div className={style.item}>{props.message}</div>
                </div>
            </div>
        </NavLink>
    );
};

export default Dialog;
