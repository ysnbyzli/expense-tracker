import { RecordDispatch, Record, RecordForm } from "../../types/record";
import api from "../../utils/api";


export const getRecord = () => async (dispatch: RecordDispatch) => {
    dispatch({ type: "RECORD_GET_START" })
    try {
        const response = await api.get<Record[]>('/records');
        response.data.sort((a, b) => b.id - a.id);
        dispatch({ type: "RECORD_GET_SUCCESS", payload: response.data })
    } catch {
        dispatch({ type: "RECORD_GET_ERROR" })
    }
}


export const addRecord = (form: RecordForm) => async (dispatch: RecordDispatch) => {
    dispatch({ type: "RECORD_ADD_START" })
    try {
        const response = await api.post<Record>("/records", form)
        dispatch({ type: "RECORD_ADD_SUCCESS", payload: response.data })
    } catch {
        dispatch({ type: "RECORD_ADD_ERROR" })
    }
}