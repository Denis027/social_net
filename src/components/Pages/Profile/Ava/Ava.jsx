import React from "react";
import st from "./Ava.module.css";

const Ava = () => {
    return (
        <div>
            <img
                className={st.MyAva}
                alt="cat"
                src="https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_4x3.png"
            ></img>
        </div>
    );
};

export default Ava;
