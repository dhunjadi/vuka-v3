import React from 'react';
import {useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';
import {userRole} from '../data/userList';

interface ArticleProps {
    id: string;
    title: string;
    text: string;
    studyProgram: string;
    subject?: string;
    year?: number;
    isPublished: boolean;
    handleSelectToEdit?: () => void;
    handleSelectToDelete?: () => void;
}

const Article = (props: ArticleProps): JSX.Element => {
    const {title, text, subject, studyProgram, isPublished, handleSelectToEdit, handleSelectToDelete} = props;
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);

    return (
        <>
            <article className="c-article">
                <div className="c-article__header">{title}</div>
                {loggedInUser.role.type !== userRole.student && (
                    <div className="c-article__info">
                        <div className="c-article__info_pair">
                            <span>{studyProgram}</span>
                        </div>

                        {subject && (
                            <div className="c-article__info_pair">
                                <span>{subject}</span>
                            </div>
                        )}

                        <div className="c-article__info_pair">
                            <span>{isPublished ? 'Published' : 'Not published'} </span>
                        </div>
                    </div>
                )}

                <div className="c-article__body">{text}</div>
                {loggedInUser.role.type !== userRole.student && (
                    <div className="c-article__buttons">
                        <button className="btn btn--primary" onClick={handleSelectToEdit}>
                            Edit
                        </button>
                        <button className="btn btn--primary" onClick={handleSelectToDelete}>
                            Delete
                        </button>
                    </div>
                )}
            </article>
        </>
    );
};

export default Article;

Article.defaultProps = {
    subject: undefined,
    year: 1,
    handleSelectToEdit: undefined,
    handleSelectToDelete: undefined,
};
