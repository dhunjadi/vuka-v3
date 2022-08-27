import React from 'react';
import {useSelector} from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import {StoreState} from '../store/reducers/rootReducer';
import userList from '../data/userList';
import StudentCard from '../components/StudentCard';
import dummyIage from '../assets/dummyImage.jpg';
import {useNavigate} from 'react-router-dom';

const GradesPage = (): JSX.Element => {
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);
    const navigate = useNavigate();

    const displayStudents = userList.map((user) => {
        return (
            user.role == 'student' && (
                <StudentCard
                    key={user.id}
                    imgSrc={dummyIage}
                    fName={user.fName}
                    lName={user.lName}
                    email={user.email}
                    studyProgram={user.studyProgram}
                    studyType={user.studyType}
                    year={user.year}
                    onClick={() => navigate(`/grades/${user.id}`)}
                />
            )
        );
    });

    return (
        <>
            <Navbar />
            <div className="p-grades">{loggedInUser.role !== 'student' ? displayStudents : 'aaa'}</div>
        </>
    );
};

export default GradesPage;
