import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {selectClassAction} from '../store/actions/userActions';
import {Class} from '../data/userList';

interface GradeCardProps extends Class {
    showButtons: boolean;
}

const GradeCard = ({studentId, id, title, ects, semester, exam1, exam2, essay, presentation, showButtons}: GradeCardProps): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelect = (): void => {
        dispatch(selectClassAction({id, title, semester, exam1, exam2, essay, presentation, ects, studentId}));
        navigate('/grades/edit');
    };
    return (
        <div className="c-gradeCard">
            <div className="c-gradeCard__title">{title}</div>
            <div className="c-gradeCard__info">
                <span>Semester: {semester}</span> <span>ECTS: {ects}</span>
            </div>
            <div className="c-gradeCard__grades">
                <div className="c-gradeCard__grades_pair">
                    <span>Exam 1:</span> <span>{exam1}</span>
                </div>
                <div className="c-gradeCard__grades_pair">
                    <span>Exam 2:</span> <span>{exam2}</span>
                </div>
                <div className="c-gradeCard__grades_pair">
                    <span>Essay:</span> <span>{essay}</span>
                </div>
                <div className="c-gradeCard__grades_pair">
                    <span>Presentation:</span> <span>{presentation}</span>
                </div>
            </div>
            {showButtons && (
                <div className="c-gradeCard__buttons">
                    <button className="btn btn--primary" onClick={handleSelect}>
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};

export default GradeCard;

GradeCard.defaultProps = {
    showButtons: false,
};
