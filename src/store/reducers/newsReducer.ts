import {AnyAction} from 'redux';
import {INews, newsList} from '../../data/newsList';
import {ADD_NEWS_ARTICLE, DELETE_NEWS_ARTICLE} from '../actions/newsActons';

export interface newsReducerState {
    newsList: INews[];
}

const initialState = {
    newsList: newsList,
};

export const newsReducer = (state: newsReducerState = initialState, action: AnyAction): newsReducerState => {
    switch (action.type) {
        case ADD_NEWS_ARTICLE:
            return {
                ...state,
                newsList: [...state.newsList, action.news],
            };
        case DELETE_NEWS_ARTICLE:
            return {
                ...state,
                newsList: [...state.newsList.filter((article) => article.id !== action.id)],
            };
        default:
            return state;
    }
};
