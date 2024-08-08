import React from "react";
import Header from "./Header";
import style from "./Header.module.css";

class HeaderContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.header}>
                <Header />
            </div>
        );
    }
}

export default HeaderContainer;
