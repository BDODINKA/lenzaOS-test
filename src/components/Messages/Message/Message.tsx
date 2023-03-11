import React, {FC} from 'react';
import style from "./Message.module.scss";
import {Time} from "../../Time/Time";
import {Avatar} from "../../Avatar";
import {IMessage} from "../../../interface/message";


export const Message: FC<{ My: boolean, Main: boolean, el: IMessage }> = ({My, Main, el}) => {

    const messageStyle = Main ? `${style.items} ${style.message_main}` : style.items
    const wrapperStyle = Main ? `${style.wrapper} ${style.message_main}` : style.wrapper

    return (
        <div className={wrapperStyle}>
            <div className={messageStyle}>
                {!Main && <Avatar size={'sm'} src={el.user.avatar}/>}
                <div className={style.content}>
                    {!Main && <h3 className={style.title}>{`${el.user.name} ${el.user.surname}`}</h3>}
                    <div className={style.message}>
                        <p className={style.text}>{el.message}</p>
                        <Time
                            time={`${new Date(el.created_at * 1000).getHours()}:${new Date(el.created_at).getMinutes()}`}
                            My={My} className={style.time}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
