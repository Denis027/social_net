import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialog.module.css";

const Dialog = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id}>
            <div className={style.dialog_wrapper}>
                <img
                    className={style.Avatarka}
                    alt={props.alt}
                    src={props.src}
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
