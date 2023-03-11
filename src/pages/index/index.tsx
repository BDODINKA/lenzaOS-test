import React, {FC} from "react";
import {IPage} from "../../interface/page";
import {ChatList} from "../../components/ChatList/ChatList";
import {Header} from "../../components/Header/Header";
import {Input} from "../../components/Input/Input";
import {Messages} from "../../components/Messages/Messages";



export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;

    return (
        <>
            {title}
            <Header/>
            <ChatList/>
            <main>
                <Messages/>
                <Input/>
            </main>
        </>
    )
}