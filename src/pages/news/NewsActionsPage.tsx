import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import ToggleSwitch from '../../components/ToggleSwitch';
import {addNewsAricleAction, clearSelectedNewsAction, editNewsAricleAction} from '../../store/actions/newsActons';
import {studyProgramOptions} from '../../data/constants';
import Navbar from '../../components/navbar/Navbar';
import {v4 as uuidv4} from 'uuid';
import {StoreState} from '../../store/reducers/rootReducer';
import {INews} from '../../data/newsList';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const NewsActionsPage = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const {selectedNews} = useSelector((state: StoreState) => state.newsReducer);

    const isEditing = pathname.includes('edit');

    const handleCancel = (): void => {
        dispatch(clearSelectedNewsAction());
        navigate('/news');
    };

    const formik = useFormik<INews>({
        initialValues: {
            id: selectedNews.id || uuidv4(),
            title: selectedNews.title || '',
            text: selectedNews.text || '',
            studyProgram: selectedNews.studyProgram || '',
            published: selectedNews.published || false,
        },
        validationSchema: Yup.object({
            id: Yup.string().required('Unknown ID'),
            title: Yup.string().required('Title is required'),
            text: Yup.string().required('Text is required'),
            studyProgram: Yup.string().required('Study program is required'),
            published: Yup.boolean().required('Required'),
        }),
        onSubmit: () => {
            if (isEditing) {
                dispatch(editNewsAricleAction(formik.values));
                dispatch(clearSelectedNewsAction());
                navigate('/news');
                return;
            }

            dispatch(addNewsAricleAction(formik.values));
            navigate('/news');

            formik.resetForm();
        },
    });

    return (
        <>
            <Navbar />
            <div className="p-actions">
                <div className="p-actions__form">
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" placeholder="Enter Article Title..." {...formik.getFieldProps('title')} />
                        {formik.touched.title && formik.errors.title && <p>{formik.errors.title}</p>}

                        <textarea cols={30} rows={10} placeholder="Enter Article Text..." {...formik.getFieldProps('text')} />
                        {formik.touched.text && formik.errors.text && <p>{formik.errors.text}</p>}

                        <div className="p-actions__form_pair">
                            Type:
                            <select {...formik.getFieldProps('studyProgram')}>
                                {studyProgramOptions.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            {formik.touched.studyProgram && formik.errors.studyProgram && <p>{formik.errors.studyProgram}</p>}
                            Published:
                            <ToggleSwitch id="published" isOn={formik.values.published} {...formik.getFieldProps('published')} />
                            {formik.touched.published && formik.errors.published && <p>{formik.errors.published}</p>}
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
