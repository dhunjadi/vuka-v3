import {INews} from '../../data/newsList';
import {IAddNewsArticle, IDeleteNewsArticle} from './types/newsActionTypes';

export const ADD_NEWS_ARTICLE = 'ADD_NEWS_ARTICLE';
export const DELETE_NEWS_ARTICLE = 'DELETE_NEWS_ARTICLE';

export const addNewsAricleAction = (news: INews): IAddNewsArticle => ({
    type: ADD_NEWS_ARTICLE,
    news,
});

export const deleteNewsAricleAction = (id: string): IDeleteNewsArticle => ({
    type: DELETE_NEWS_ARTICLE,
    id,
});
