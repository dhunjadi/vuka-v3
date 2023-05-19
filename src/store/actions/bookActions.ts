import {Book} from '../../types/bookTypes';
import {CancelBookReservationAction, MakeABookReservationAction, SelectBookAction} from './types/bookActionTypes';

export const SELECT_BOOK = 'SELECT_BOOK';
export const MAKE_A_BOOK_RESERVATION = 'MAKE_A_BOOK_RESERVATION';
export const CANCEL_BOOK_RESERVATION = 'CANCEL_BOOK_RESERVATION';

export const selectBookAction = (book: Book): SelectBookAction => ({
    type: SELECT_BOOK,
    book,
});

export const makeABookReservationAction = (userId: string): MakeABookReservationAction => ({
    type: MAKE_A_BOOK_RESERVATION,
    userId,
});

export const cancelBookReservationAction = (userId: string): CancelBookReservationAction => ({
    type: CANCEL_BOOK_RESERVATION,
    userId,
});
