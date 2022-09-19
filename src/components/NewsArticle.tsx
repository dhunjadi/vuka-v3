import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {deleteNewsAricleAction} from '../store/actions/newsActons';
import {StoreState} from '../store/reducers/rootReducer';

interface NewsArticleProps {
    id: string;
    title: string;
    text: string;
    type: string;
    published: boolean;
    showButtons?: boolean;
}

const NewsArticle = ({id, title, text, type, published, showButtons}: NewsArticleProps): JSX.Element => {
    const {loggedInUser} = useSelector((state: StoreState) => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <article className="c-newsArticle">
                <div className="c-newsArticle__header">{title}</div>
                {loggedInUser.role !== 'student' && (
                    <div className="c-newsArticle__info">
                        <div className="c-newsArticle__info_pair">
                            <span>News type: </span> <span>{type}</span>
                        </div>

                        <div className="c-newsArticle__info_pair">
                            <span>{published ? 'Published' : 'Not published'} </span>
                        </div>
                    </div>
                )}

                <div className="c-newsArticle__body">{text}</div>
                {showButtons && (
                    <div className="c-newsArticle__buttons">
                        <button className="btn btn--primary" onClick={() => navigate(`/news/actions/${id}`)}>
                            Edit
                        </button>
                        <button className="btn btn--primary" onClick={() => dispatch(deleteNewsAricleAction(id))}>
                            Delete
                        </button>
                    </div>
                )}
            </article>
        </>
    );
};

export default NewsArticle;

NewsArticle.defaultProps = {
    showButtons: false,
};
