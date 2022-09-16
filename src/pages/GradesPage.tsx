import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import userList from '../data/userList';
import StudentCard from '../components/StudentCard';
import dummyIage from '../assets/dummyImage.jpg';
import {useNavigate} from 'react-router-dom';
import GradeCard from '../components/GradeCard';
import Tabs from '../components/Tabs';

const GradesPage = (): JSX.Element => {
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);
    const navigate = useNavigate();

    const semesters = ['1', '2', '3', '4', '5', '6'];
    const [currentSemester, setCurrentSemester] = useState<string>(semesters[0]);

    const getBody = (): JSX.Element => {
        if (loggedInUser.role !== 'student') {
            return (
                <div className="p-grades__students">
                    {userList.map((user) => {
                        return (
                            user.role === 'student' && (
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
                    })}
                </div>
            );
        }

        return (
            <>
                <Tabs tabList={semesters} selectedTab={currentSemester} handleSelect={(tab) => setCurrentSemester(tab)} />
                <div className="p-grades__classes">
                    {loggedInUser.classes
                        .filter((clas) => clas.semester === Number(currentSemester))
                        .map((clas) => {
                            return <GradeCard key={clas.title} buttons={loggedInUser.role !== 'student'} {...clas} />;
                        })}
                </div>
            </>
        );
    };

    return <div className="p-grades">{getBody()}</div>;
};

export default GradesPage;
