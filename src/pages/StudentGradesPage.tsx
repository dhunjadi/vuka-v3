import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import GradeCard from '../components/GradeCard';
import Tabs from '../components/Tabs';
import userList from '../data/userList';
import {StoreState} from '../store/reducers/rootReducer';

const StudentGradesPage = (): JSX.Element => {
    const {id} = useParams();
    const selectedStudent = userList.find((user) => user.id === id);
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);

    const semesters = ['1', '2', '3', '4', '5', '6'];
    const [currentSemester, setCurrentSemester] = useState<string>(semesters[0]);

    return (
        <div className="p-studentGrades">
            <Tabs tabList={semesters} selectedTab={currentSemester} handleSelect={(tab) => setCurrentSemester(tab)} />

            <div className="p-studentGrades__classes">
                {selectedStudent?.classes
                    .filter((clas) => clas.semester === Number(currentSemester))
                    .map((clas) => {
                        return <GradeCard key={clas.title} buttons={loggedInUser.role !== 'student'} {...clas} />;
                    })}
            </div>
        </div>
    );
};

export default StudentGradesPage;
