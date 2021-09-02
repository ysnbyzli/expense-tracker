import api from '../../utils/api';
import { CategoryDispatch, Category, CategoryForm, AddCategoryDispatch } from './../../types/category';

export const getCategories = () => async (dispatch: CategoryDispatch) => {
    dispatch({ type: "GET_CATEGORIES_START" })
    try {
        const response = await api.get<Category[]>("/categories");
        dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data })
    } catch {
        dispatch({ type: "GET_CATEGORIES_ERROR" })
    }
}

export const addCategory = (form: CategoryForm) => async (dispatch: AddCategoryDispatch) => {
    dispatch({ type: "ADD_CATEGORY_START" })
    try {
        const reponse = await api.post<Category>("/categories", form);
        dispatch({ type: "ADD_CATEGORY_SUCCESS", payload: reponse.data })
    } catch {
        dispatch({ type: "ADD_CATEGORY_ERROR" })
    }
}