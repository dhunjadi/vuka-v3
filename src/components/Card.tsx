import React, {PropsWithChildren} from 'react';

interface CardProps {
    header?: string;
    info?: string[];
    cursorPointer?: boolean;
    showButtons: boolean;
    buttons?: JSX.Element;
    onClick?: () => void;
}

const Card = (props: PropsWithChildren<CardProps>): JSX.Element => {
    const {header, info, cursorPointer, showButtons, buttons, children, onClick} = props;
    return (
        <div className={`c-card ${cursorPointer && 'cursor-p'}`} onClick={onClick}>
            <div className="c-card__header">{header}</div>
            <div className="c-card__info">{info}</div>
            <div className="c-card__body">{children}</div>
            <div className="c-card__footer">{showButtons && <div className="c-card__footer_buttons">{buttons}</div>}</div>
        </div>
    );
};

export default Card;

Card.defaultProps = {
    header: '',
    info: [],
    cursorPointer: false,
    showButtons: false,
    buttons: undefined,
    onClick: undefined,
};
