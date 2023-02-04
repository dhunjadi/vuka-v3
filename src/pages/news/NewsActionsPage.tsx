import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import TextInput from '../../components/TextInput';
import ToggleSwitch from '../../components/ToggleSwitch';
import {addNewsAricleAction, clearSelectedNewsAction, editNewsAricleAction} from '../../store/actions/newsActons';
import {studyProgramOptions} from '../../data/constants';
import Navbar from '../../components/navbar/Navbar';
import {v4 as uuidv4} from 'uuid';
import {StoreState} from '../../store/reducers/rootReducer';
import {INews} from '../../data/newsList';

const NewsActionsPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const {selectedNews} = useSelector((state: StoreState) => state.newsReducer);

    const isEditing = pathname.includes('edit');

    const [articleInfo, setArticleInfo] = useState<INews>({
        id: selectedNews.id || uuidv4(),
        title: selectedNews.title || '',
        text: selectedNews.text || '',
        studyProgram: selectedNews.studyProgram || '',
        published: selectedNews.published || false,
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
        if (isEditing) {
            dispatch(editNewsAricleAction(articleInfo));
            dispatch(clearSelectedNewsAction());
            setArticleInfo({id: '', title: '', text: '', studyProgram: '', published: false});
            navigate('/news');
            return;
        }

        dispatch(addNewsAricleAction(articleInfo));
        setArticleInfo({id: '', title: '', text: '', studyProgram: '', published: false});
        navigate('/news');
    };

    const handleCancel = (): void => {
        dispatch(clearSelectedNewsAction());
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
                            Type:
                            <select name="studyProgram" value={articleInfo.studyProgram} onChange={handleChange}>
                                {studyProgramOptions.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            Published:
                            <ToggleSwitch id="published" name="published" isOn={articleInfo.published} onChange={handleChange} />
                        </div>

                        <div className="p-actions__form_buttons">
                            <button className="btn btn--primary" onClick={handleCancel}>
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

export default NewsActionsPage;
