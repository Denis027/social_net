import React from "react";
import { NavLink } from "react-router-dom";
import st from "./Nav.module.css";
import FriendsBar from "../FriendsBar/FriendsBar";

const Nav = (props) => {
    return (
        <div className={st.nav}>
            <nav>
                <ul>
                    {/* <li className={st.item}>
                        <NavLink to="/home">Home</NavLink>
                    </li> */}
                    <li className={st.item}>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li className={st.item}>
                        <NavLink to="/dialogs">Dialogs</NavLink>
                    </li>
                    <li className={st.item}>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                    {/* <li className={st.item}>
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li className={st.item}>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li className={st.item}>
                        <NavLink to="/settings">Settings</NavLink>
                    </li> */}
                </ul>
            </nav>
            <FriendsBar friendsList={props.friendsList} />
        </div>
    );
};

export default Nav;
