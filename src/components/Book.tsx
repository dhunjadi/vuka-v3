import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import Navbar from './navbar/Navbar';
import {cancelBookReservationAction, makeABookReservationAction} from '../store/actions/bookActions';
import Modal from './Modal';

const Book = (): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);
    const {
        selectedBook: {imgSrc, title, author, language, pages, year, copiesAvailable, reservations},
    } = useSelector((state: StoreState) => state.bookReducer);
    const reservationMade = reservations.includes(loggedInUser.userId);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (): void => {
        setIsModalOpen(true);
    };

    const handleConfirm = (): void => {
        !reservationMade
            ? dispatch(makeABookReservationAction(loggedInUser.userId))
            : dispatch(cancelBookReservationAction(loggedInUser.userId));
        setIsModalOpen(false);
    };

    return (
        <>
            <Navbar />
            <div className="c-book">
                <div className="c-book__img">
                    <img src={imgSrc} alt="" />
                </div>

                <div className="c-book__info">
                    <div className="c-book__info_pair">
                        Title: <p>{title}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Author: <p>{author}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Language: <p>{language}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Pages: <p>{pages}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Year: <p>{year}</p>
                    </div>
                    <div className="c-book__info_pair">
                        Copies Availiable: <p>{copiesAvailable}</p>
                    </div>
                    <div className="c-book__btns">
                        <button className="btn btn--primary" onClick={handleClick} disabled={!reservationMade && copiesAvailable === 0}>
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
                    ? `Are you sure you want to make a reservation for ${title} by ${author}?`
                    : `Are you sure you want to cancel the reservation for  ${title} by ${author}?`}
            </Modal>
        </>
    );
};

export default Book;
