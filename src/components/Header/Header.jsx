import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <NavLink className={style.loginLink} to="/login">Login</NavLink>
            </div>
        </header>
    );
};

export default Header;
