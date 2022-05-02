export interface User{
    username:string;
}

export interface LoginResponse{
    data: User;
    token:string;
}

export interface LoginPayload{
    username:string;
    password:string;
}