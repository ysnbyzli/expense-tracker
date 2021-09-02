import { CategoryState } from './../types/category';
import { combineReducers } from 'redux'
import { UserState } from '../types/user';
import userReducer from './reducers/userReducer';
import categoryReducer from './reducers/categoryReducer';

export interface AppState {
    user: UserState;
    categories: any;
    // records: any;
}


const rootReducer = combineReducers<AppState>({
    user: userReducer,
    categories: categoryReducer,
    // records: () => { }
})


export default rootReducer;