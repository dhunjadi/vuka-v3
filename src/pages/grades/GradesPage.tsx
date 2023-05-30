import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../../store/reducers/rootReducer';
import StudentCard from '../../components/StudentCard';
import {useNavigate} from 'react-router-dom';
import GradeCard from '../../components/GradeCard';
import Tabs from '../../components/Tabs';
import Navbar from '../../components/navbar/Navbar';
import {selectStudentAction} from '../../store/actions/userActions';
import {UserRole} from '../../types/userTypes';
import {findStudentProps} from '../../utils/userUtils';
import {classList} from '../../data/classList';

const GradesPage = (): JSX.Element => {
    const {loggedInUser, userList} = useSelector((state: StoreState) => state.userReducer);
    const studentProps = findStudentProps(loggedInUser.userId);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const semesters = ['1', '2', '3', '4', '5', '6'];
    const [currentSemester, setCurrentSemester] = useState<string>(semesters[0]);

    const getBody = (): JSX.Element => {
        if (loggedInUser.role !== UserRole.student) {
            return (
                <div className="p-grades__students">
                    {userList.map((user) => {
                        const student = findStudentProps(user.userId);
                        return (
                            student && (
                                <StudentCard
                                    key={student.userId}
                                    studyProgram={student.studyProgram}
                                    studyType={student.studyType}
                                    year={Number(student.year)}
                                    imgSrc={user.imgSrc}
                                    onClick={() => {
                                        dispatch(selectStudentAction(user));
                                        navigate(`/grades/${student.userId}`);
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
                <Tabs
                    tabList={semesters}
                    selectedTab={currentSemester}
                    text={'Semesters: '}
                    handleSelect={(tab) => setCurrentSemester(tab)}
                />
                <div className="p-grades__classes">
                    {studentProps &&
                        classList
                            .filter((el) => el.semester === currentSemester && el.studentId === studentProps.userId)
                            .map((el) => {
                                return <GradeCard key={el.studentId} {...el} />;
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
