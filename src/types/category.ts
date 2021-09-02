import { ThunkDispatch } from 'redux-thunk';

// GET CATEGORIES
interface GET_CATEGORIES_START {
    type: "GET_CATEGORIES_START"
}

interface GET_CATEGORIES_SUCCESS {
    type: "GET_CATEGORIES_SUCCESS",
    payload: Category[]
}

interface GET_CATEGORIES_ERROR {
    type: "GET_CATEGORIES_ERROR"
}

// ADD CATEGORY
interface ADD_CATEGORY_START {
    type: "ADD_CATEGORY_START"
}

interface ADD_CATEGORY_SUCCESS {
    type: "ADD_CATEGORY_SUCCESS",
    payload: Category
}

interface ADD_CATEGORY_ERROR {
    type: "ADD_CATEGORY_ERROR"
}

// CATEGORY STATE
export interface CategoryState {
    data: Category[],
    loading: boolean,
    error: ""
}

// CATEGORY
export interface Category {
    id: number;
    name: string;
    type: string;
    color: string;
}


export interface CategoryForm {
    name: string;
    type: "income" | "expense",
    color?: string
}

export type CategoryAction = GET_CATEGORIES_START | GET_CATEGORIES_SUCCESS | GET_CATEGORIES_ERROR
export type AddCategoryAction = ADD_CATEGORY_START | ADD_CATEGORY_SUCCESS | ADD_CATEGORY_ERROR

export type CategoryDispatch = ThunkDispatch<CategoryState, void, CategoryAction>
export type AddCategoryDispatch = ThunkDispatch<CategoryState, void, AddCategoryAction>