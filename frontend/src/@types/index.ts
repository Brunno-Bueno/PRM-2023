export interface ICredential {
    username: string;
    password: string;
}

export interface IUser {
    id?: number;
    fullname: string;
    username: string;
    password?: string;
    description?: string;
}
export interface ITopic {
    id?: number;
    owner?: IUser;
    content: string;
    createdAt?: Date;
}