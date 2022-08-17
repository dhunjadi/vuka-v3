import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {StoreState} from '../store/reducers/rootReducer';

const Book = (): JSX.Element => {
    const bookList = useSelector((state: StoreState) => state.bookReducer.bookList);

    const {id} = useParams();
    const selectedBook = bookList.find((news) => news.id === id);
    return <div className="c-tabs">{selectedBook?.title}</div>;
};

export default Book;

Book.defaultProps = {};
