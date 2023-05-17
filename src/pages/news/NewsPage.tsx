import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Article from '../../components/Article';
import Tabs from '../../components/Tabs';
import {StoreState} from '../../store/reducers/rootReducer';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import {deleteNewsAricleAction, selectNewsAricleAction} from '../../store/actions/newsActons';
import Modal from '../../components/Modal';
import {isStudent} from '../../utils/userUtils';

const NewsPage = (): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);
    const {newsList, selectedNews} = useSelector((state: StoreState) => state.newsReducer);

    const isLoggedInStudent = isStudent(loggedInUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newsTypes = ['General', 'Mechatronics'];
    const [newsType, setNewsType] = useState(newsTypes[0]);
    const [isDeleteNewsModalOpen, setIsDeleteNewsModalOpen] = useState<boolean>(false);

    const handleDelete = (): void => {
        dispatch(deleteNewsAricleAction(selectedNews.id));
        setIsDeleteNewsModalOpen(false);
    };

    const getBody = (): JSX.Element => {
        if (isLoggedInStudent) {
            return (
                <>
                    <Tabs tabList={newsTypes} selectedTab={newsType} handleSelect={(tab) => setNewsType(tab)} />
                    <div className="p-news__articles">
                        {newsList
                            .filter((news) => news.studyProgram === newsType && news.published === true)
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
                                    dispatch(selectNewsAricleAction(news));
                                    setIsDeleteNewsModalOpen(true);
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

            <Modal
                isOpen={isDeleteNewsModalOpen}
                onCancel={() => setIsDeleteNewsModalOpen(false)}
                onConfirm={handleDelete}
                showCancel
                showConfirm
            >
                Are you sure you want to delete &quot;{selectedNews.title}&quot;?
            </Modal>
        </>
    );
};

export default NewsPage;
