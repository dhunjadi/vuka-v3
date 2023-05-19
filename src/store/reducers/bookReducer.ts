import {AnyAction} from 'redux';
import {bookList} from '../../data/bookList';
import {Book} from '../../types/bookTypes';

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
