import api from '../../utils/api';
import { CategoryDispatch, Category, CategoryForm, AddCategoryDispatch, UpdateCategoryDispatch, DeleteCategoryDispatch } from './../../types/category';

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

export const updateCategory = (form: Partial<CategoryForm>, id: number) => async (dispatch: UpdateCategoryDispatch) => {
    dispatch({ type: "UPDATE_CATEGORY_START" })
    try {
        const response = await api.put<Category>(`/categories/${id}`, form)
        dispatch({ type: "UPDATE_CATEGORY_SUCCESS", payload: response.data })
    } catch {
        dispatch({ type: "UPDATE_CATEGORY_ERROR" })
    }
}

export const deleteCategory = (id: number) => async (dispatch: DeleteCategoryDispatch) => {
    dispatch({ type: "DELETE_CATEGORY_START" })
    try {
        await api.delete(`/categories/${id}`)
        dispatch({ type: "DELETE_CATEGORY_SUCCESS", payload: id })
    } catch (error) {
        dispatch({ type: "DELETE_CATEGORY_ERROR" })
    }
}