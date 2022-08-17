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
                <div className="c-book__info_title">
                    Title: <p>{selectedBook?.title}</p>
                </div>
                <div>
                    Author: <p>{selectedBook?.author}</p>
                </div>
                <div>
                    Language: <p>{selectedBook?.language}</p>
                </div>
                <div>
                    Pages: <p>{selectedBook?.pages}</p>
                </div>
                <div>
                    Year: <p>{selectedBook?.year}</p>
                </div>
                <div>
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
