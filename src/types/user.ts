import { ThunkDispatch } from "redux-thunk"

// DEFAULT STATE
export interface UserState {
    data: User;
    loading: boolean;
    error: string;
}

// ACTION
interface LOGIN_START {
    type: "LOGIN_START"
}

interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS",
    payload: User
}

interface LOGIN_ERROR {
    type: "IS_LOGIN_ERROR"
}

interface IS_LOGIN_START {
    type: "IS_LOGIN_START"
}

interface IS_LOGIN_SUCCESS {
    type: "IS_LOGIN_SUCCESS",
    payload: User
}

interface IS_LOGIN_ERROR {
    type: "LOGIN_ERROR"
}
interface LOGOUT {
    type: "LOGOUT"
}

// LOGIN RESPONSE
export interface User {
    message: string;
    username: string;
    email: string;
    full_name: string;
    token: string;
}

export interface LoginForm {
    username: string;
    password: string;
}

export type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR | IS_LOGIN_START | IS_LOGIN_SUCCESS | IS_LOGIN_ERROR | LOGOUT;

export type UserDispatch = ThunkDispatch<UserState, void, UserAction>



