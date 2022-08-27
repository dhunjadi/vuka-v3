import React from 'react';
import {useParams} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import userList from '../data/userList';

const GradesDetailsPage = (): JSX.Element => {
    const {id} = useParams();
    const selectedStudent = userList.find((user) => user.id === id);
    return (
        <>
            <Navbar />
            <div className="p-gradesDetails">{selectedStudent?.fName} grades</div>
        </>
    );
};

export default GradesDetailsPage;
