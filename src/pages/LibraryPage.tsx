import React from 'react';
import Navbar from '../components/navbar/Navbar';

const LibraryPage = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <div className="p-library">Library</div>
        </>
    );
};

export default LibraryPage;
