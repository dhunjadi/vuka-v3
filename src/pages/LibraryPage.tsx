import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar/Navbar';
import {StoreState} from '../store/reducers/rootReducer';

const LibraryPage = (): JSX.Element => {
    const bookList = useSelector((state: StoreState) => state.bookReducer.bookList);
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState<string>('');

    return (
        <>
            <Navbar />
            <div className="p-library">
                <div className="p-library__content">
                    <div className="p-library__content_searchInput">
                        <input
                            type="text"
                            placeholder="Search Titles..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <div className="p-library__content_books">
                        {bookList
                            .filter((books) => {
                                if (!books.title.toLowerCase().includes(searchText.toLowerCase())) return;

                                return books;
                            })
                            .map((book) => {
                                return (
                                    <Card
                                        key={book.id}
                                        header={book.title}
                                        info={[`${book.author}`]}
                                        imgSrc={book.imgSrc}
                                        cursorPointer
                                        onClick={() => navigate(`/library/books/${book.id}`)}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LibraryPage;
