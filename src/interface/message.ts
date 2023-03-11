import {User} from "./chatList";


export interface MessagesResponse {
	response: IMessage[];
}
export interface IMessage {
	id: string;
	created_at: number;
	user: User;
	message: string;
	is_new: boolean;
}