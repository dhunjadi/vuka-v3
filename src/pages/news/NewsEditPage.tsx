import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import TextInput from '../../components/TextInput';
import ToggleSwitch from '../../components/ToggleSwitch';
import {editNewsAricleAction} from '../../store/actions/newsActons';
import {studyProgramOptions} from '../../data/constants';
import Navbar from '../../components/navbar/Navbar';
import {StoreState} from '../../store/reducers/rootReducer';

const NewsEditPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {selectedNews} = useSelector((state: StoreState) => state.newsReducer);

    const [articleInfo, setArticleInfo] = useState({
        id: selectedNews.id,
        title: selectedNews.title,
        text: selectedNews.text,
        studyProgram: selectedNews.studyProgram,
        published: selectedNews.published,
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = e.target;

        setArticleInfo((prev) => {
            if (name === 'published') return {...prev, [name]: !prev.published};
            if (name === 'studyProgram') {
                const selected = value;
                return {...prev, [name]: selected};
            }
            return {...prev, [name]: value};
        });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(editNewsAricleAction(articleInfo));
        setArticleInfo({id: '', title: '', text: '', studyProgram: '', published: false});
        navigate('/news');
    };

    return (
        <>
            <Navbar />
            <div className="p-actions">
                <div className="p-actions__form">
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

                        <div className="p-actions__form_pair">
                            <select name="studyProgram" value={articleInfo.studyProgram} onChange={handleChange}>
                                {studyProgramOptions.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <ToggleSwitch id="published" name="published" isOn={articleInfo.published} onChange={handleChange} />
                        </div>

                        <div className="p-actions__form_buttons">
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
