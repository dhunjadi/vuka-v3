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

    const newsForStudents = newsList.filter((news) => {
        return news.type === newsType.toLowerCase() && news.published === true;
    });
    return (
        <>
            <Navbar />
            <div className="p-news">
                <Tabs tabList={newsTypes} selectedTab={newsType} handleSelect={(tab) => setNewsType(tab)} />
                {newsForStudents.map((news) => {
                    return (
                        <Card key={news.id} header={news.title} cursorPointer onClick={() => navigate(`/news/${news.id}`)}>
                            {news.text.substring(0, 100) + '...'}
                        </Card>
                    );
                })}
            </div>
        </>
    );
};

export default NewsPage;
