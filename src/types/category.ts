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

// UPDATE CATEGORY
interface UPDATE_CATEGORY_START {
    type: "UPDATE_CATEGORY_START"
}

interface UPDATE_CATEGORY_SUCCESS {
    type: "UPDATE_CATEGORY_SUCCESS",
    payload: Category
}

interface UPDATE_CATEGORY_ERROR {
    type: "UPDATE_CATEGORY_ERROR"
}

// DELETE CATEGORY
interface DELETE_CATEGORY_START {
    type: "DELETE_CATEGORY_START"
}

interface DELETE_CATEGORY_SUCCESS {
    type: "DELETE_CATEGORY_SUCCESS",
    payload: number;
}

interface DELETE_CATEGORY_ERROR {
    type: "DELETE_CATEGORY_ERROR"
}

// CATEGORY STATE
export interface CategoryState {
    data: Category[];
    loading: boolean;
    error: "";
}

// CATEGORY
export interface Category {
    id: number;
    name: string;
    type: "income" | "expense";
    color: string;
}


export interface CategoryForm {
    name: string;
    type: "income" | "expense";
    color?: string;
}

export type CategoryAction = GET_CATEGORIES_START | GET_CATEGORIES_SUCCESS | GET_CATEGORIES_ERROR
export type AddCategoryAction = ADD_CATEGORY_START | ADD_CATEGORY_SUCCESS | ADD_CATEGORY_ERROR
export type UpdateCategoryAction = UPDATE_CATEGORY_START | UPDATE_CATEGORY_SUCCESS | UPDATE_CATEGORY_ERROR
export type DeleteCategoryAction = DELETE_CATEGORY_START | DELETE_CATEGORY_SUCCESS | DELETE_CATEGORY_ERROR

export type CategoryDispatch = ThunkDispatch<CategoryState, void, CategoryAction>
export type AddCategoryDispatch = ThunkDispatch<CategoryState, void, AddCategoryAction>
export type UpdateCategoryDispatch = ThunkDispatch<CategoryState, void, UpdateCategoryAction>
export type DeleteCategoryDispatch = ThunkDispatch<CategoryState, void, DeleteCategoryAction>