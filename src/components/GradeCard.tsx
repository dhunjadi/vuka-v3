import React from 'react';

interface GradeCardProps {
    title: string;
    semester: number;
    ects: number;
    exam1: number | undefined;
    exam2: number | undefined;
    essay: number | undefined;
    presentation: number | undefined;
    buttons: boolean;
}

const GradeCard = (props: GradeCardProps): JSX.Element => {
    const {title, ects, semester, exam1, exam2, essay, presentation, buttons} = props;
    return (
        <div className="c-gradeCard">
            <div className="c-gradeCard__title">{title}</div>
            <div className="c-gradeCard__info">
                <span>Semester: {semester}</span> <span>ECTS: {ects}</span>
            </div>
            <div className="c-gradeCard__grades">
                <span>Exam 1: {exam1}</span>
                <span>Exam 2: {exam2}</span>
                <span>Essay: {essay}</span>
                <span>Presentation: {presentation}</span>
            </div>
            {buttons && (
                <div className="c-gradeCard__buttons">
                    <button className="btn btn--primary">Edit</button>
                </div>
            )}
        </div>
    );
};

export default GradeCard;

GradeCard.defaultProps = {
    buttons: false,
};
