import React from 'react';
import {User, StudyProgram, StudyType} from '../types/userTypes';
interface StudentCardProps extends Pick<User, 'email' | 'fName' | 'lName' | 'imgSrc'> {
    onClick?: () => void;
    studyProgram: StudyProgram;
    studyType: StudyType;
    year: number;
}

const StudentCard = (props: StudentCardProps): JSX.Element => {
    const {imgSrc, fName, lName, email, studyProgram, studyType, year, onClick} = props;

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
