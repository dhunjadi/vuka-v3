import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import TextInput from '../components/TextInput';
import ToggleSwitch from '../components/ToggleSwitch';
import {addNewsAricleAction, editNewsAricleAction} from '../store/actions/newsActons';
import {newsArticleTypeOptions} from '../data/constants';
import {v4 as uuidv4} from 'uuid';
import {newsList} from '../data/newsList';
import Navbar from '../components/navbar/Navbar';

const NewsActionsPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const selectedArticle = newsList.find((article) => article.id === id);

    const [articleInfo, setArticleInfo] = useState({
        id: id || uuidv4(),
        title: selectedArticle?.title || '',
        text: selectedArticle?.text || '',
        type: selectedArticle?.type || '',
        published: selectedArticle?.published || false,
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

    /*     const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (selectedArticle) dispatch(editNewsAricleAction(articleInfo));
        dispatch(addNewsAricleAction(articleInfo));
        setArticleInfo({id: '', title: '', text: '', type: '', published: false});
        navigate(-1);
    }; */

    const handleConfirm = (): void => {
        if (selectedArticle) dispatch(editNewsAricleAction(articleInfo));
        dispatch(addNewsAricleAction(articleInfo));
        setArticleInfo({id: '', title: '', text: '', type: '', published: false});
        navigate('/news');
    };

    return (
        <>
            <Navbar />
            <div className="p-newsActions">
                <div className="p-newsActions__form">
                    <form>
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

                        <div className="p-newsActions__form_pair">
                            <select name="type" value={articleInfo.type} onChange={handleChange}>
                                {newsArticleTypeOptions.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <ToggleSwitch id="published" name="published" isOn={articleInfo.published} onChange={handleChange} />
                        </div>

                        <div className="p-newsActions__form_buttons">
                            <button className="btn btn--primary" onClick={() => navigate('/news')}>
                                Cancel
                            </button>

                            <button type="button" className="btn btn--primary" onClick={handleConfirm}>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewsActionsPage;
