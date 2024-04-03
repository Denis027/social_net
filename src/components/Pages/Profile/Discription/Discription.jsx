import React from "react";
import st from "./Discription.module.css";

const Discription = () => {
    return (
        <div className={st.Discription}>
            <h1 className={st.itemName}>Dmitry K.</h1>
            <div className={st.itemDis}>
                Let me introduce myself. My name is Dmitry K. I’m 32 years old.
                I was born in Krasnodar, but now live in Moscow. I’m divorced,
                but now I have a new girlfriend who is a professional dancer. My
                parents live in a small village near Krasnodar. I’m the only
                child in the family. I have two lovely kids. I was graduated
                from the university and worked as an engineer at the factory. My
                work experience accounts 7 years. What concerns my character and
                skills, I’m very hard-working, responsible, diligent, and social
                person with a good sense of humor. In the pastime, I’m crazy
                about fishing and cars repairing. That’s all all about myself.
            </div>
        </div>
    );
};

export default Discription;
