import {INews} from '../../data/newsList';
import {IAddNewsArticle, IDeleteNewsArticle, IEditNewsArticle} from './types/newsActionTypes';

export const ADD_NEWS_ARTICLE = 'ADD_NEWS_ARTICLE';
export const DELETE_NEWS_ARTICLE = 'DELETE_NEWS_ARTICLE';
export const EDIT_NEWS_ARTICLE = 'EDIT_NEWS_ARTICLE';

export const addNewsAricleAction = (news: INews): IAddNewsArticle => ({
    type: ADD_NEWS_ARTICLE,
    news,
});

export const deleteNewsAricleAction = (id: string): IDeleteNewsArticle => ({
    type: DELETE_NEWS_ARTICLE,
    id,
});

export const editNewsAricleAction = (news: INews): IEditNewsArticle => ({
    type: EDIT_NEWS_ARTICLE,
    news,
});
