import { ThunkDispatch } from 'redux-thunk';
import { Category } from './category';

export interface Record {
    id: number;
    title: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
    category: Category
}

export interface RecordForm {
    title: string;
    amount: number;
    category_id: number;
}

export interface RecordState {
    data: Record[];
    loading: boolean;
    error: string;
}

interface RECORD_GET_START {
    type: "RECORD_GET_START"
}

interface RECORD_GET_SUCCESS {
    type: "RECORD_GET_SUCCESS",
    payload: Record[]
}

interface RECORD_GET_ERROR {
    type: "RECORD_GET_ERROR",
}

interface RECORD_ADD_START {
    type: "RECORD_ADD_START"
}

interface RECORD_ADD_SUCCESS {
    type: "RECORD_ADD_SUCCESS",
    payload: Record
}

interface RECORD_ADD_ERROR {
    type: "RECORD_ADD_ERROR",
}


export type RecordAction =
    RECORD_GET_START |
    RECORD_GET_SUCCESS |
    RECORD_GET_ERROR |
    RECORD_ADD_START |
    RECORD_ADD_SUCCESS |
    RECORD_ADD_ERROR
export type RecordDispatch = ThunkDispatch<RecordState, void, RecordAction>