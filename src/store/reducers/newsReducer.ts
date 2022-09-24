import {AnyAction} from 'redux';
import {INews, newsList} from '../../data/newsList';
import {ADD_NEWS_ARTICLE, DELETE_NEWS_ARTICLE, EDIT_NEWS_ARTICLE, SELECT_NEWS_ARTICLE} from '../actions/newsActons';

export interface newsReducerState {
    newsList: INews[];
    selectedNews: INews;
}

const initialState = {
    newsList: newsList,
    selectedNews: {id: '', title: '', text: '', studyProgram: '', published: false, read: false},
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
        case SELECT_NEWS_ARTICLE:
            return {
                ...state,
                selectedNews: action.news,
            };
        case EDIT_NEWS_ARTICLE:
            return {
                ...state,
                newsList: [...state.newsList.map((news) => (news.id === action.news.id ? action.news : news))],
            };
        default:
            return state;
    }
};
