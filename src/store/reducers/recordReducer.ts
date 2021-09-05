import { RecordAction, RecordState } from "../../types/record";

const defaultState: RecordState = {
    data: [],
    loading: false,
    error: ""
}


const recordReducer = (state: RecordState = defaultState, action: RecordAction): RecordState => {
    switch (action.type) {
        case "RECORD_GET_START":
            return { ...state, loading: true, error: "" }
        case "RECORD_GET_SUCCESS":
            return { ...state, loading: false, data: action.payload }
        case "RECORD_GET_ERROR":
            return { ...state, loading: false, error: "Error fetching records" }
        case "RECORD_ADD_START":
            return { ...state, loading: true, error: "" }
        case "RECORD_ADD_SUCCESS":
            return { ...state, loading: false, data: [action.payload, ...state.data] }
        case "RECORD_ADD_ERROR":
            return { ...state, loading: false, error: "Error add record" }
        default:
            return state;
    }
}

export default recordReducer;