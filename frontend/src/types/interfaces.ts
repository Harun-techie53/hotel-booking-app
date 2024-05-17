export interface IUser {
    email: string;
    name: string;
    _id: string;
    joinedAt: Date;
}

export interface IToast {
    message: string;
    type: "SUCCESS" | "ERROR";
}