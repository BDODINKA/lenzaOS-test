import React, {FC, useEffect, useState} from 'react';
import {Avatar} from "../Avatar";
import style from "./ChatList.module.scss"
import {Time} from "../Time/Time";
import {List} from "../../interface/chatList";
import {ChatTC, setChatIdAC} from "../../app/chatReducer";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch";
import {useAppSelector} from "../../utils/hooks/useAppSelector";
import {RootStateType} from "../../app/store";


export const ChatList: FC = () => {
    const [stateItem, setStateItem] = useState<List>(0)
    const [id, setId] = useState('')

    const chat = useAppSelector((state: RootStateType) => state.chat.chats)


    const styleItem = stateItem === 2 ? `${style.item} ${style.item_selected}` : style.item

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(ChatTC())
    }, [dispatch])


    const setIdHandler = (id: string) => {
        dispatch(setChatIdAC(id))
        setStateItem(2)
        setId(id)
    }

    return (
        <aside className={style.wrapper}>
            <h2 className={style.title}>All items</h2>
            <ul className={style.items}>
                {chat.map((el) =>
                    <li className={el.id === id ? styleItem : style.item}
                        key={el.id}
                        onClick={() => setIdHandler(el.id)}
                    >
                        <Avatar size={'md'} src={el.avatar}/>
                        <div className={style.item_content}>
                            <h3 className={style.item_title}>{el.title}</h3>
                            <Time
                                time={`${new Date(el.created_at * 1000).getHours()}:${new Date(el.created_at).getMinutes()}`}
                                My={true} className={style.item_time}/>
                            <p className={style.item_message}>{el.last_message.message}</p>
                        </div>
                    </li>)}
            </ul>
        </aside>
    );
};

