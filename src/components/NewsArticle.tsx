import React, {PropsWithChildren} from 'react';
import {useSelector} from 'react-redux';
import {StoreState} from '../store/reducers/rootReducer';

interface NewsArticleProps {
    header?: string;
    newsType: string;
    published?: boolean;
    cursorPointer?: boolean;
    showButtons?: boolean;
    onClick?: () => void;
}

const NewsArticle = (props: PropsWithChildren<NewsArticleProps>): JSX.Element => {
    const {header, newsType, published, cursorPointer, children, showButtons, onClick} = props;

    const loggedInUser = useSelector((state: StoreState) => state.userReducer.loggedInUser);

    return (
        <article className={`c-newsArticle ${cursorPointer && 'cursor-p'}`} onClick={onClick}>
            <div className="c-newsArticle__header">{header}</div>
            {loggedInUser.role !== 'student' && (
                <div className="c-newsArticle__info">
                    <div className="c-newsArticle__info_pair">
                        <span>News type: </span> <span>{newsType}</span>
                    </div>

                    <div className="c-newsArticle__info_pair">
                        <span>{published ? 'Published' : 'Not published'} </span>
                    </div>
                </div>
            )}

            <div className="c-newsArticle__body">{children}</div>
            {showButtons && (
                <div className="c-newsArticle__buttons">
                    <button className="btn btn--primary">Edit</button>
                    <button className="btn btn--primary">Delete</button>
                </div>
            )}
        </article>
    );
};

export default NewsArticle;

NewsArticle.defaultProps = {
    header: undefined,
    published: undefined,
    cursorPointer: false,
    showButtons: false,
    onClick: undefined,
};
