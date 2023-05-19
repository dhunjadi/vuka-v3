import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import Navbar from './navbar/Navbar';
import {cancelBookReservationAction, makeABookReservationAction} from '../store/actions/bookActions';
import Modal from './Modal';

const Book = (): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);
    const {selectedBook} = useSelector((state: StoreState) => state.bookReducer);
    const reservationMade = selectedBook.reservations.includes(loggedInUser.id);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (): void => {
        setIsModalOpen(true);
    };

    const handleConfirm = (): void => {
        !reservationMade ? dispatch(makeABookReservationAction(loggedInUser.id)) : dispatch(cancelBookReservationAction(loggedInUser.id));
        setIsModalOpen(false);
    };

    return (
        <>
            <Navbar />
            <div className="c-book">
                <div className="c-book__img">
                    <img src={selectedBook?.imgSrc} alt="" />
                </div>

                <div className="c-book__info">
                    <div className="c-book__info_pair">
                        Title: <p>{selectedBook?.title}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Author: <p>{selectedBook?.author}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Language: <p>{selectedBook?.language}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Pages: <p>{selectedBook?.pages}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Year: <p>{selectedBook?.year}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Copies Availiable: <p>{selectedBook?.copiesAvailiable}</p>
                    </div>
                    <div className="c-book__btns">
                        <button className="btn btn--primary" onClick={handleClick}>
                            {!reservationMade ? 'Make a reservation' : 'Cancel reservation'}
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
                header={!reservationMade ? 'Make a reservation' : 'Cancel reservation'}
                showConfirm
                showCancel
                confirmText="Confirm"
                cancelText="Cancel"
            >
                {reservationMade
                    ? `Are you sure you want to make a reservation for ${selectedBook.title} by ${selectedBook.author}?`
                    : `Are you sure you want to cancel the reservation for  ${selectedBook.title} by ${selectedBook.author}?`}
            </Modal>
        </>
    );
};

export default Book;
