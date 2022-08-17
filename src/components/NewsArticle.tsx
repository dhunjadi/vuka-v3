import React, {PropsWithChildren} from 'react';

interface NewsArticleProps {
    header?: string;
    info?: string[];
    cursorPointer?: boolean;
    onClick?: () => void;
}

const NewsArticle = (props: PropsWithChildren<NewsArticleProps>): JSX.Element => {
    const {header, info, cursorPointer, children, onClick} = props;
    return (
        <article className={`c-newsArticle ${cursorPointer && 'cursor-p'}`} onClick={onClick}>
            <div className="c-newsArticle__header">{header}</div>
            <div className="c-newsArticle__info">
                {info?.map((info) => (
                    <p key={info}>{info}</p>
                ))}
            </div>
            <div className="c-newsArticle__body">{children}</div>
        </article>
    );
};

export default NewsArticle;

NewsArticle.defaultProps = {
    header: undefined,
    info: [],
    cursorPointer: false,
    onClick: undefined,
};
