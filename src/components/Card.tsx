import React, {PropsWithChildren} from 'react';

interface CardProps {
    header?: string;
    cursorPointer?: boolean;
    onClick?: () => void;
}

const Card = (props: PropsWithChildren<CardProps>): JSX.Element => {
    const {header, cursorPointer, children, onClick} = props;
    return (
        <div className={`c-card ${cursorPointer && 'cursor-p'}`} onClick={onClick}>
            <div className="c-card__header">{header}</div>
            {children}
        </div>
    );
};

export default Card;

Card.defaultProps = {
    header: '',
    cursorPointer: false,
    onClick: undefined,
};
