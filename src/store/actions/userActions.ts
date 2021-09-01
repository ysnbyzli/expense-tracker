import { ThunkDispatch } from "redux-thunk"
import api from "../../utils/api";
import { UserDispatch, LoginForm, User } from './../../types/user';


export const login = (creds: LoginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const response = await api.post<User>("/users/login", creds);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
        localStorage.setItem("token", response.data.token)
    } catch {
        dispatch({ type: "LOGIN_ERROR" })
    }
}