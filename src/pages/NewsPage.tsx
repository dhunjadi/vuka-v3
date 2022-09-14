import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Modal from '../components/Modal';
import Navbar from '../components/navbar/Navbar';
import NewsArticle from '../components/NewsArticle';
import Tabs from '../components/Tabs';
import TextInput from '../components/TextInput';
import ToggleSwitch from '../components/ToggleSwitch';
import {addNewsAricleAction} from '../store/actions/newsActons';
import {StoreState} from '../store/reducers/rootReducer';
import {v4 as uuidv4} from 'uuid';

const NewsPage = (): JSX.Element => {
    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);
    const dispatch = useDispatch();

    const newsList = useSelector((state: StoreState) => state.newsReducer.newsList);

    const newsTypes = ['GENERAL', loggedInUser.studyProgram.toUpperCase()];
    const [newsType, setNewsType] = useState(newsTypes[0]);
    const [addNewArticleModalIsOpen, setAddNewArticleModalIsOpen] = useState(false);
    const [newArticleTitle, setNewArticleTitle] = useState('');
    const [newArticleText, setNewArticleText] = useState('');
    const [newArticleType, setNewsArticleType] = useState('');
    const [isPublished, setIsPublished] = useState(false);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(
            addNewsAricleAction({
                id: uuidv4(),
                title: newArticleTitle,
                text: newArticleText,
                type: newArticleType || 'general',
                published: isPublished,
            })
        );
        setAddNewArticleModalIsOpen(false);
        setNewArticleTitle('');
        setNewArticleText('');
        setNewsArticleType('');
        setIsPublished(false);
    };

    const handleConfirm = (): void => {
        dispatch(
            addNewsAricleAction({
                id: uuidv4(),
                title: newArticleTitle,
                text: newArticleText,
                type: newArticleType || 'general',
                published: isPublished,
            })
        );
        setAddNewArticleModalIsOpen(false);
        setNewArticleTitle('');
        setNewArticleText('');
        setNewsArticleType('');
        setIsPublished(false);
    };

    const newNewsArticleTypeOptions = [
        {value: 'general', label: 'General'},
        {value: 'hospitality', label: 'Hospitality'},
        {value: 'mechatronics', label: 'Mechatronics'},
    ];

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
                            <button className="btn btn--primary" onClick={() => setAddNewArticleModalIsOpen(true)}>
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

                {/* NEW NEWS ARTICLE MODAL */}
                <Modal
                    isOpen={addNewArticleModalIsOpen}
                    onCancel={() => setAddNewArticleModalIsOpen(false)}
                    onConfirm={handleConfirm}
                    header="New news article"
                    showConfirm
                    showCancel
                    confirmText="Add new article"
                    cancelText="Cancel"
                    size="lg"
                >
                    <form onSubmit={handleFormSubmit}>
                        <TextInput
                            type="text"
                            placeholder="Enter Article Title..."
                            value={newArticleTitle}
                            onChange={(e) => setNewArticleTitle(e.target.value)}
                        />
                        <TextInput
                            type="textArea"
                            placeholder="Enter Article Text..."
                            value={newArticleText}
                            onChange={(e) => setNewArticleText(e.target.value)}
                        />

                        <div className="c-modal__content_pair">
                            <select
                                value={newArticleType}
                                onChange={(e: React.FormEvent<HTMLSelectElement>) => setNewsArticleType(e.currentTarget.value)}
                            >
                                {newNewsArticleTypeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <ToggleSwitch id="published" isOn={isPublished} handleToggle={() => setIsPublished(!isPublished)} />
                        </div>
                    </form>
                </Modal>
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
