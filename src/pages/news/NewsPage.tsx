import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Article from '../../components/Article';
import Tabs from '../../components/Tabs';
import {StoreState} from '../../store/reducers/rootReducer';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import {deleteNewsAricleAction, selectNewsAricleAction} from '../../store/actions/newsActons';

const NewsPage = (): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);
    const {newsList} = useSelector((state: StoreState) => state.newsReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newsTypes = ['GENERAL', loggedInUser.studyProgram.toUpperCase()];
    const [newsType, setNewsType] = useState(newsTypes[0]);

    const getBody = (): JSX.Element => {
        if (loggedInUser.role == 'student') {
            return (
                <>
                    <Tabs tabList={newsTypes} selectedTab={newsType} handleSelect={(tab) => setNewsType(tab)} />
                    <div className="p-news__articles">
                        {newsList
                            .filter((news) => news.studyProgram === newsType.toLocaleLowerCase() && news.published === true)
                            .map((news) => {
                                return <Article key={news.id} {...news} />;
                            })}
                    </div>
                </>
            );
        }

        return (
            <>
                <Tabs
                    tabList={['STUDENT NEWS']}
                    selectedTab={'STUDENT NEWS'}
                    buttons={
                        <>
                            <button className="btn btn--primary" onClick={() => navigate(`/news/new`)}>
                                Add news
                            </button>
                        </>
                    }
                    handleSelect={(tab) => setNewsType(tab)}
                />
                <div className="p-news__articles">
                    {newsList.map((news) => {
                        return (
                            <Article
                                key={news.id}
                                handleSelectToEdit={() => {
                                    dispatch(selectNewsAricleAction(news));
                                    navigate(`/news/edit/${news.id}`);
                                }}
                                handleSelectToDelete={() => {
                                    dispatch(deleteNewsAricleAction(news.id));
                                }}
                                {...news}
                            />
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <>
            <Navbar />
            <div className="p-news">{getBody()}</div>
        </>
    );
};

export default NewsPage;
