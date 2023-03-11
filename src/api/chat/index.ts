import {axiosInstance} from "../apiConfig";
import {ChatResponse} from "../../interface/chatList";
import {URLS} from "../../constants/urls";
import { MessagesResponse } from "../../interface/message";

export const getChatList = () => {
    return axiosInstance.get<ChatResponse>(URLS.LIST)
}
export const getMessage = (id:string) => {
    return axiosInstance.get<MessagesResponse>(URLS.MESSAGES,{params:{chat_id:id}})
}