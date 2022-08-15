import React, {useState} from 'react';
import Card from '../components/Card';
import Navbar from '../components/navbar/Navbar';
import bookList from '../data/bookList';

const LibraryPage = (): JSX.Element => {
    const [searchText, setSearchText] = useState<string>('');

    return (
        <>
            <Navbar />
            <div className="p-library">
                <div className="p-library__books">
                    <div className="p-library__books_searchInput">
                        <input
                            type="text"
                            placeholder="Search Titles..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    {bookList
                        .filter((books) => {
                            if (!books.title.toLowerCase().includes(searchText.toLowerCase())) return;

                            return books;
                        })
                        .map((book) => {
                            return <Card key={book.id} header={book.title} info={[`${book.author}`]} imgSrc={book.imgSrc} cursorPointer />;
                        })}
                </div>
            </div>
        </>
    );
};

export default LibraryPage;
