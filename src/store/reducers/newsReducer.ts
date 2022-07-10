import {AnyAction} from 'redux';
import {INews, newsList} from '../../data/newsList';

export interface newsReducerState {
    newsList: INews[];
}

const initialState = {
    newsList: newsList,
};

export const newsReducer = (state: newsReducerState = initialState, action: AnyAction): newsReducerState => {
    switch (action.type) {
        default:
            return state;
    }
};
