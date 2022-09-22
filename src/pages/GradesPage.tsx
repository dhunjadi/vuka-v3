import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import StudentCard from '../components/StudentCard';
import dummyIage from '../assets/dummyImage.jpg';
import {useNavigate} from 'react-router-dom';
import GradeCard from '../components/GradeCard';
import Tabs from '../components/Tabs';
import Navbar from '../components/navbar/Navbar';
import {selectStudentAction} from '../store/actions/userActions';

const GradesPage = (): JSX.Element => {
    const {loggedInUser, userList} = useSelector((state: StoreState) => state.userReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const semesters = ['1', '2', '3', '4', '5', '6'];
    const [currentSemester, setCurrentSemester] = useState<string>(semesters[0]);

    const getBody = (): JSX.Element => {
        if (loggedInUser.role !== 'student') {
            return (
                <div className="p-grades__students">
                    {userList.map((user) => {
                        const {id, fName, lName, email, password, role, studyProgram, studyType, year, books, classes} = user;
                        return (
                            user.role === 'student' && (
                                <StudentCard
                                    key={user.id}
                                    imgSrc={dummyIage}
                                    {...user}
                                    onClick={() => {
                                        dispatch(
                                            selectStudentAction({
                                                id,
                                                fName,
                                                lName,
                                                email,
                                                password,
                                                role,
                                                studyProgram,
                                                studyType,
                                                year,
                                                books,
                                                classes,
                                            })
                                        );
                                        navigate(`/grades/${user.id}`);
                                    }}
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
                            return <GradeCard key={clas.id} showButtons {...clas} />;
                        })}
                </div>
            </>
        );
    };

    return (
        <>
            <Navbar />
            <div className="p-grades">{getBody()}</div>
        </>
    );
};

export default GradesPage;
