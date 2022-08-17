import {AnyAction} from 'redux';
import {IBook, bookList} from '../../data/bookList';

export interface bookReducerState {
    bookList: IBook[];
}

const initialState = {
    bookList: bookList,
};

export const bookReducer = (state: bookReducerState = initialState, action: AnyAction): bookReducerState => {
    switch (action.type) {
        default:
            return state;
    }
};
