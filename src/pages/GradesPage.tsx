import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Navbar from '../components/navbar/Navbar';
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

    /* const getBody = () => {
        loggedInUser.role !== 'student' ?
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
             :  <div className="p-grades__classes">
                {loggedInUser.classes .filter((clas) => clas.semester === Number(currentSemester))
                        .map((clas) => {
                            return <GradeCard key={clas.title} buttons={loggedInUser.role !== 'student'} {...clas} />;
                        })}
            </div>
        } 
     
    }; */

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
            /*  <>
                <Tabs
                    tabList={['STUDENT NEWS']}
                    selectedTab={'STUDENT NEWS'}
                    buttons={
                        <>
                            <button className="btn btn--primary">Add news</button>
                        </>
                    }
                    handleSelect={(tab) => setNewsType(tab)}
                />
                <div className="p-news__articles">
                    {newsList.map((news) => {
                        return (
                            <Card
                                key={news.id}
                                header={news.title}
                                info={[`News type: ${news.type}`, `${news.published ? 'Published' : 'Not published'}`]}
                                showButtons
                                buttons={
                                    <>
                                        <button className="btn btn--primary">Edit news</button>
                                        <button className="btn btn--primary">Delete news</button>
                                    </>
                                }
                                cursorPointer
                                onClick={() => navigate(`/news/${news.id}`)}
                            >
                                {news.text.substring(0, 100) + '...'}{' '}
                            </Card>
                        );
                    })}
                </div>
            </> */
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
