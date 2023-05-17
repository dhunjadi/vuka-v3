import {News} from '../../data/newsList';
import {
    IAddNewsArticleAction,
    IClearSelectedNewsAction,
    IDeleteNewsArticleAction,
    IEditNewsArticleAction,
    ISelectNewsArticleAction,
} from './types/newsActionTypes';

export const ADD_NEWS_ARTICLE = 'ADD_NEWS_ARTICLE';
export const DELETE_NEWS_ARTICLE = 'DELETE_NEWS_ARTICLE';
export const SELECT_NEWS_ARTICLE = 'SELECT_NEWS_ARTICLE';
export const EDIT_NEWS_ARTICLE = 'EDIT_NEWS_ARTICLE';
export const CLEAR_SELECTED_NEWS = 'CLEAR_SELECTED_NEWS';

export const addNewsAricleAction = (news: News): IAddNewsArticleAction => ({
    type: ADD_NEWS_ARTICLE,
    news,
});

export const deleteNewsAricleAction = (id: string): IDeleteNewsArticleAction => ({
    type: DELETE_NEWS_ARTICLE,
    id,
});

export const selectNewsAricleAction = (news: News): ISelectNewsArticleAction => ({
    type: SELECT_NEWS_ARTICLE,
    news,
});

export const editNewsAricleAction = (news: News): IEditNewsArticleAction => ({
    type: EDIT_NEWS_ARTICLE,
    news,
});

export const clearSelectedNewsAction = (): IClearSelectedNewsAction => ({
    type: CLEAR_SELECTED_NEWS,
});
