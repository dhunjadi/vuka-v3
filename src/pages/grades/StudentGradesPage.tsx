import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import GradeCard from '../../components/GradeCard';
import Navbar from '../../components/navbar/Navbar';
import Tabs from '../../components/Tabs';
import {StoreState} from '../../store/reducers/rootReducer';
import {findStudentProps} from '../../utils/userUtils';
import {classList} from '../../data/classList';

const StudentGradesPage = (): JSX.Element => {
    const {selectedUser} = useSelector((state: StoreState) => state.userReducer);
    const studentProps = findStudentProps(selectedUser.userId);

    const semesters = ['1', '2', '3', '4', '5', '6'];
    const [currentSemester, setCurrentSemester] = useState<string>(semesters[0]);

    return (
        <>
            <Navbar />
            <div className="p-studentGrades">
                <Tabs
                    tabList={semesters}
                    selectedTab={currentSemester}
                    text={'Semesters: '}
                    handleSelect={(tab) => setCurrentSemester(tab)}
                />

                <div className="p-studentGrades__classes">
                    {studentProps &&
                        classList
                            .filter((el) => el.semester === currentSemester && el.studentId === studentProps.userId)
                            .map((el) => {
                                return <GradeCard key={el.title} showButtons {...el} />;
                            })}
                </div>
            </div>
        </>
    );
};

export default StudentGradesPage;
