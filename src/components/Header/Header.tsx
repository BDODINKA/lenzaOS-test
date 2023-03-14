import React, {FC, useEffect, useState} from 'react';
import style from "./Header.module.scss"
import chat from '../../assets/Chat.webp'
import {useAppSelector} from "../../utils/hooks/useAppSelector";
import {RootStateType} from "../../app/store";
export const Header:FC = () => {

    const chats = useAppSelector((state: RootStateType) => state.chat.chats)
    const chatId = useAppSelector((state: RootStateType) => state.chat.chat_id)
    const [title,setTitle]=useState('Great Project')

    useEffect(()=>{
       const chat = chats.find((el)=>el.id === chatId)
       chat && setTitle(chat.title)
    },[chatId])

    return (
        <header className={style.wrapper}>
            <img src={chat} alt="chat" className={style.img}/>
            <h1 className={style.title}>{title}</h1>
        </header>
    );
};

