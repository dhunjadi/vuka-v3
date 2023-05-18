import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Article from '../../components/Article';
import Tabs from '../../components/Tabs';
import Navbar from '../../components/navbar/Navbar';
import Modal from '../../components/Modal';
import {StoreState} from '../../store/reducers/rootReducer';
import {isStudent} from '../../utils/userUtils';
import {deleteNewsAricleAction, selectNewsAricleAction} from '../../store/actions/newsActons';

const NewsPage = (): JSX.Element => {
    const {loggedInUser} = useSelector<StoreState, StoreState['userReducer']>((state) => state.userReducer);
    const {newsList, selectedNews} = useSelector<StoreState, StoreState['newsReducer']>((state) => state.newsReducer);

    const isLoggedInStudent = isStudent(loggedInUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newsTypes = isLoggedInStudent ? ['General', loggedInUser.role.student.studyProgram] : ['Student News'];
    const [selectedNewsType, setSelectedNewsType] = useState(newsTypes[0]);
    const [isDeleteNewsModalOpen, setIsDeleteNewsModalOpen] = useState<boolean>(false);

    const handleDelete = useCallback(() => {
        dispatch(deleteNewsAricleAction(selectedNews.id));
        setIsDeleteNewsModalOpen(false);
    }, [dispatch, selectedNews.id]);

    const filteredNewsList = newsList.filter((news) => {
        if (isLoggedInStudent) {
            return news.studyProgram === selectedNewsType && news.isPublished === true;
        }
        return true;
    });

    return (
        <>
            <Navbar />
            <div className="p-news">
                <Tabs
                    tabList={newsTypes}
                    selectedTab={selectedNewsType}
                    handleSelect={(tab) => setSelectedNewsType(tab)}
                    buttons={
                        !isLoggedInStudent ? (
                            <button className="btn btn--primary" onClick={() => navigate(`/news/new`)}>
                                Add news
                            </button>
                        ) : (
                            <></>
                        )
                    }
                />
                <div className="p-news__articles">
                    {filteredNewsList.map((news) => (
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
                    ))}
                </div>
            </div>
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
