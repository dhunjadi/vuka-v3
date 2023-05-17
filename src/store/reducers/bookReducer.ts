import {AnyAction} from 'redux';
import {Book, bookList} from '../../data/bookList';

export interface bookReducerState {
    bookList: Book[];
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
