import React, {FC, useEffect} from 'react';
import {Message} from "./Message/Message";
import {useAppSelector} from "../../utils/hooks/useAppSelector";
import {RootStateType} from "../../app/store";
import {MessageTC} from "../../app/chatReducer";
import {useAppDispatch} from "../../utils/hooks/useAppDispatch";
import {NewMessage} from "../NewMessage/NewMessage";
import style from "./Messages.module.scss";
import {SystemMessage} from "../SystemMessage/SystemMessage";

export const Messages: FC = () => {
    const messages = useAppSelector((state: RootStateType) => state.chat.messages)
    const chat_id = useAppSelector((state: RootStateType) => state.chat.chat_id)
    const dispatch = useAppDispatch()

    useEffect(() => {
            dispatch(MessageTC())
    }, [chat_id,dispatch])

    if (!messages) return null

    const date = (data: number) => {
        return `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}` === `${new Date(data).getDate()}.${new Date(data).getMonth()}.${new Date(data).getFullYear()}`
    }

    return (
        <div className={style.wrapper}>
            {messages.map((el) =>
                <div key={el.id} className={style.content}>
                    {el.is_new && el.id !== el.user.id && <NewMessage/>}
                    {date(el.created_at) && <SystemMessage data={el.created_at}/>}
                    <Message My={el.user.you} Main={el.user.you} el={el}/>
                </div>
            )}
        </div>

    );
};
