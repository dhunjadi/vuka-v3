import {AnyAction} from 'redux';
import {bookList} from '../../data/bookList';
import {Book} from '../../types/bookTypes';
import {CANCEL_BOOK_RESERVATION, MAKE_A_BOOK_RESERVATION, SELECT_BOOK} from '../actions/bookActions';

export interface bookReducerState {
    bookList: Book[];
    selectedBook: Book;
}

const initialState = {
    bookList: bookList,
    selectedBook: {
        id: '',
        author: '',
        country: '',
        imgSrc: '',
        language: '',
        link: '',
        pages: '',
        title: '',
        year: '',
        copiesAvailiable: '',
        reservations: [],
    },
};

export const bookReducer = (state: bookReducerState = initialState, action: AnyAction): bookReducerState => {
    switch (action.type) {
        case SELECT_BOOK:
            return {
                ...state,
                selectedBook: action.book,
            };
        case MAKE_A_BOOK_RESERVATION:
            return {
                ...state,
                selectedBook: {
                    ...state.selectedBook,
                    reservations: [...state.selectedBook.reservations, action.userId],
                },
            };
        case CANCEL_BOOK_RESERVATION:
            return {
                ...state,
                selectedBook: {
                    ...state.selectedBook,
                    reservations: state.selectedBook.reservations.filter((userId) => userId !== action.userId),
                },
            };

        default:
            return state;
    }
};
