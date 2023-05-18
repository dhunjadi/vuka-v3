import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import GradeCard from '../../components/GradeCard';
import Navbar from '../../components/navbar/Navbar';
import Tabs from '../../components/Tabs';
import {StoreState} from '../../store/reducers/rootReducer';
import {isStudent} from '../../utils/userUtils';

const StudentGradesPage = (): JSX.Element => {
    const {selectedUser} = useSelector((state: StoreState) => state.userReducer);

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
                    {isStudent(selectedUser) &&
                        selectedUser.role.student.classes
                            .filter((clas) => clas.semester === currentSemester)
                            .map((clas) => {
                                return <GradeCard key={clas.title} showButtons {...clas} />;
                            })}
                </div>
            </div>
        </>
    );
};

export default StudentGradesPage;
