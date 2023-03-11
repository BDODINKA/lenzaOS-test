import React, {FC} from 'react';
import style from "./Header.module.scss"
import chat from '../../assets/Chat.webp'
export const Header:FC = () => {
    return (
        <header className={style.wrapper}>
            <img src={chat} alt="chat" className={style.img}/>
            <h1 className={style.title}>Great Project</h1>
        </header>
    );
};

