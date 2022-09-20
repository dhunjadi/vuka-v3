import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import TextInput from '../components/TextInput';
import ToggleSwitch from '../components/ToggleSwitch';
import {editNewsAricleAction} from '../store/actions/newsActons';
import {newsArticleTypeOptions} from '../data/constants';
import Navbar from '../components/navbar/Navbar';
import {StoreState} from '../store/reducers/rootReducer';

const NewsEditPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {selectedNews} = useSelector((state: StoreState) => state.newsReducer);

    const [articleInfo, setArticleInfo] = useState({
        id: selectedNews.id,
        title: selectedNews.title,
        text: selectedNews.text,
        type: selectedNews.type,
        published: selectedNews.published,
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = e.target;

        setArticleInfo((prev) => {
            if (name === 'published') return {...prev, [name]: !prev.published};
            if (name === 'type') {
                const selected = value;
                return {...prev, [name]: selected};
            }
            return {...prev, [name]: value};
        });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(editNewsAricleAction(articleInfo));
        setArticleInfo({id: '', title: '', text: '', type: '', published: false});
        navigate('/news');
    };

    return (
        <>
            <Navbar />
            <div className="p-newsEdit">
                <div className="p-newsEdit__form">
                    <form onSubmit={handleFormSubmit}>
                        <TextInput
                            type="text"
                            name="title"
                            placeholder="Enter Article Title..."
                            value={articleInfo.title}
                            onChange={handleChange}
                        />
                        <TextInput
                            type="textArea"
                            name="text"
                            placeholder="Enter Article Text..."
                            value={articleInfo.text}
                            onChange={handleChange}
                        />

                        <div className="p-newsEdit__form_pair">
                            <select name="type" value={articleInfo.type} onChange={handleChange}>
                                {newsArticleTypeOptions.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <ToggleSwitch id="published" name="published" isOn={articleInfo.published} onChange={handleChange} />
                        </div>

                        <div className="p-newsEdit__form_buttons">
                            <button className="btn btn--primary" onClick={() => navigate('/news')}>
                                Cancel
                            </button>

                            <button type="submit" className="btn btn--primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewsEditPage;
