import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/navbar/Navbar';
import Tabs from '../components/Tabs';
import {StoreState} from '../store/reducers/rootReducer';

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
                                    <Card key={news.id} header={news.title} cursorPointer onClick={() => navigate(`/news/${news.id}`)}>
                                        {news.text.substring(0, 100) + '...'}{' '}
                                    </Card>
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
