import {INews} from '../../data/newsList';
import {IAddNewsArticleAction, IDeleteNewsArticleAction, IEditNewsArticleAction, ISelectNewsArticleAction} from './types/newsActionTypes';

export const ADD_NEWS_ARTICLE = 'ADD_NEWS_ARTICLE';
export const DELETE_NEWS_ARTICLE = 'DELETE_NEWS_ARTICLE';
export const SELECT_NEWS_ARTICLE = 'SELECT_NEWS_ARTICLE';
export const EDIT_NEWS_ARTICLE = 'EDIT_NEWS_ARTICLE';

export const addNewsAricleAction = (news: INews): IAddNewsArticleAction => ({
    type: ADD_NEWS_ARTICLE,
    news,
});

export const deleteNewsAricleAction = (id: string): IDeleteNewsArticleAction => ({
    type: DELETE_NEWS_ARTICLE,
    id,
});

export const selectNewsAricleAction = (news: INews): ISelectNewsArticleAction => ({
    type: SELECT_NEWS_ARTICLE,
    news,
});

export const editNewsAricleAction = (news: INews): IEditNewsArticleAction => ({
    type: EDIT_NEWS_ARTICLE,
    news,
});
