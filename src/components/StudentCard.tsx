import React from 'react';
import {IUser} from '../data/userList';

interface StudentCardProps extends IUser {
    onClick?: () => void;
}

const StudentCard = ({imgSrc, fName, lName, email, studyProgram, studyType, year, onClick}: StudentCardProps): JSX.Element => {
    return (
        <div className="c-studentCard cursor-p" onClick={onClick}>
            <div className="c-studentCard__img">
                <img src={imgSrc} alt="student image" />
            </div>
            <div className="c-studentCard__info">
                <div className="c-studentCard__info_pair">
                    First Name: <span>{fName}</span>{' '}
                </div>
                <div className="c-studentCard__info_pair">
                    Last Name: <span>{lName}</span>
                </div>
                <div className="c-studentCard__info_pair">
                    Email: <span>{email}</span>{' '}
                </div>
                <div className="c-studentCard__info_pair">
                    Study Program: <span>{studyProgram}</span>
                </div>
                <div className="c-studentCard__info_pair">
                    Study Type: <span>{studyType}</span>
                </div>
                <div className="c-studentCard__info_pair">
                    Year: <span>{year}</span>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;

StudentCard.defaultProps = {
    imgSrc: undefined,
    fName: undefined,
    lName: undefined,
    email: undefined,
    studyProgram: undefined,
    studyType: undefined,
    year: undefined,
    onClick: undefined,
};
