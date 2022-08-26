import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {StoreState} from '../store/reducers/rootReducer';

const Book = (): JSX.Element => {
    const bookList = useSelector((state: StoreState) => state.bookReducer.bookList);

    const {id} = useParams();
    const selectedBook = bookList.find((news) => news.id === id);
    return (
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
                    <button className="btn btn--primary">Make a reservation</button>
                </div>
            </div>
        </div>
    );
};

export default Book;

Book.defaultProps = {};
