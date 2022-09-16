import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import NewsArticle from '../components/NewsArticle';
import Tabs from '../components/Tabs';
import {StoreState} from '../store/reducers/rootReducer';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

const NewsPage = (): JSX.Element => {
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);
    const newsList = useSelector((state: StoreState) => state.newsReducer.newsList);

    const navigate = useNavigate();

    const newsTypes = ['GENERAL', loggedInUser.studyProgram.toUpperCase()];
    const [newsType, setNewsType] = useState(newsTypes[0]);

    const getBody = (): JSX.Element => {
        if (loggedInUser.role === 'student') {
            return (
                <>
                    <Tabs tabList={newsTypes} selectedTab={newsType} handleSelect={(tab) => setNewsType(tab)} />
                    <div className="p-news__articles">
                        {newsList
                            .filter((news) => news.type === newsType.toLocaleLowerCase() && news.published === true)
                            .map((news) => {
                                return (
                                    <NewsArticle key={news.id} id={news.id} header={news.title} newsType={news.type}>
                                        {news.text}
                                    </NewsArticle>
                                );
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
                            <button className="btn btn--primary" onClick={() => navigate(`/news/actions/${uuidv4()}`)}>
                                Add news
                            </button>
                        </>
                    }
                    handleSelect={(tab) => setNewsType(tab)}
                />
                <div className="p-news__articles">
                    {newsList.map((news) => {
                        return (
                            <NewsArticle
                                key={news.id}
                                id={news.id}
                                header={news.title}
                                newsType={news.type}
                                published={news.published}
                                showButtons
                            >
                                {news.text}
                            </NewsArticle>
                        );
                    })}
                </div>
            </>
        );
    };

    return <div className="p-news">{getBody()}</div>;
};

export default NewsPage;
