import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import TextInput from '../components/TextInput';
import ToggleSwitch from '../components/ToggleSwitch';
import {addNewsAricleAction} from '../store/actions/newsActons';
import {newsArticleTypeOptions} from '../data/constants';
import {v4 as uuidv4} from 'uuid';

const NewsActionsPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [articleInfo, setArticleInfo] = useState({id: uuidv4(), title: '', text: '', type: '', published: false});

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
        dispatch(addNewsAricleAction(articleInfo));
        setArticleInfo({id: '', title: '', text: '', type: '', published: false});
        navigate(-1);
    };

    const handleConfirm = (): void => {
        dispatch(addNewsAricleAction(articleInfo));
        setArticleInfo({id: '', title: '', text: '', type: '', published: false});
        navigate('/news');
    };

    return (
        <div className="p-newsActions">
            <div className="p-newsActions__form">
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

                        <button type="submit" className="btn btn--primary" onClick={handleConfirm}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsActionsPage;
