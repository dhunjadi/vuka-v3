import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StoreState} from '../../store/reducers/rootReducer';
import StudentCard from '../../components/StudentCard';
import {useNavigate} from 'react-router-dom';
import GradeCard from '../../components/GradeCard';
import Tabs from '../../components/Tabs';
import Navbar from '../../components/navbar/Navbar';
import {selectStudentAction} from '../../store/actions/userActions';
import {userRole} from '../../data/userList';

const GradesPage = (): JSX.Element => {
    const {loggedInUser, userList} = useSelector((state: StoreState) => state.userReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const semesters = ['1', '2', '3', '4', '5', '6'];
    const [currentSemester, setCurrentSemester] = useState<string>(semesters[0]);

    const getBody = (): JSX.Element => {
        if (loggedInUser.role !== userRole.student) {
            return (
                <div className="p-grades__students">
                    {userList.map((user) => {
                        return (
                            user.role === userRole.student && (
                                <StudentCard
                                    key={user.id}
                                    {...user}
                                    onClick={() => {
                                        dispatch(selectStudentAction(user));
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
                <Tabs
                    tabList={semesters}
                    selectedTab={currentSemester}
                    text={'Semesters: '}
                    handleSelect={(tab) => setCurrentSemester(tab)}
                />
                <div className="p-grades__classes">
                    {loggedInUser.classes
                        .filter((clas) => clas.semester === Number(currentSemester))
                        .map((clas) => {
                            return <GradeCard key={clas.id} {...clas} />;
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
