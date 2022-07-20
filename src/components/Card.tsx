import React, {PropsWithChildren} from 'react';

interface CardProps {
    header?: string;
    info?: string[];
    cursorPointer?: boolean;
    onClick?: () => void;
}

const Card = (props: PropsWithChildren<CardProps>): JSX.Element => {
    const {header, info, cursorPointer, children, onClick} = props;
    return (
        <div className={`c-card ${cursorPointer && 'cursor-p'}`} onClick={onClick}>
            <div className="c-card__header">{header}</div>
            <div className="c-card__info">{info}</div>
            {children}
        </div>
    );
};

export default Card;

Card.defaultProps = {
    header: '',
    info: [],
    cursorPointer: false,
    onClick: undefined,
};
