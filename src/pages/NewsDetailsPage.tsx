import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import NewsArticle from '../components/NewsArticle';
import {StoreState} from '../store/reducers/rootReducer';

const NewsDetailsPage = (): JSX.Element => {
    const newsList = useSelector((state: StoreState) => state.newsReducer.newsList);

    const navigate = useNavigate();

    const {id} = useParams();
    const selectedNews = newsList.find((news) => news.id === id);

    return (
        <div className="p-newsDetails">
            <Navbar />
            <div className="container">
                <NewsArticle header={selectedNews?.title}>{selectedNews?.text}</NewsArticle>
                <div className="p-newsDetails__btns">
                    <button className="btn btn--primary" onClick={() => navigate(-1)}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;
