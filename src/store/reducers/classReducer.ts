import {AnyAction} from 'redux';
import {classList} from '../../data/classList';
import {Class} from '../../types/classTypes';

export interface classReducerState {
    classList: Class[];
    selectedClass: Class;
}

const initialState = {
    classList: classList,
    selectedClass: {studentId: '', id: '', title: '', semester: '', exam1: '', exam2: '', essay: '', presentation: '', ects: ''},
};

export const classReducer = (state: classReducerState = initialState, action: AnyAction): classReducerState => {
    switch (action.type) {
        default:
            return state;
    }
};
