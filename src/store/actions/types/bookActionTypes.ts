import {Book} from '../../../types/bookTypes';
import {CANCEL_BOOK_RESERVATION, MAKE_A_BOOK_RESERVATION, SELECT_BOOK} from '../bookActions';

export interface SelectBookAction {
    type: typeof SELECT_BOOK;
    book: Book;
}

export interface MakeABookReservationAction {
    type: typeof MAKE_A_BOOK_RESERVATION;
    userId: string;
}

export interface CancelBookReservationAction {
    type: typeof CANCEL_BOOK_RESERVATION;
    userId: string;
}
