export enum List { "Rest","Hover","Selected"}

export interface ChatResponse {
	response: ChatItems[];
}

export interface Last_message {
	created_at: number;
	user_id: string;
	user_name: string;
	user_surname: string;
	you: boolean;
	message: string;
}

export interface User {
	id: string;
	name: string;
	surname: string;
	avatar: string;
	you: boolean;
}

export interface ChatItems {
	id: string;
	created_at: number;
	title: string;
	avatar: string;
	private: boolean;
	last_message: Last_message;
	count_unread: number;
	users: User[];
}