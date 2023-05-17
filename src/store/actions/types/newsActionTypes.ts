import {News} from '../../../data/newsList';
import {ADD_NEWS_ARTICLE, CLEAR_SELECTED_NEWS, DELETE_NEWS_ARTICLE, EDIT_NEWS_ARTICLE, SELECT_NEWS_ARTICLE} from '../newsActons';

export interface IAddNewsArticleAction {
    type: typeof ADD_NEWS_ARTICLE;
    news: News;
}

export interface IDeleteNewsArticleAction {
    type: typeof DELETE_NEWS_ARTICLE;
    id: string;
}

export interface ISelectNewsArticleAction {
    type: typeof SELECT_NEWS_ARTICLE;
    news: News;
}

export interface IEditNewsArticleAction {
    type: typeof EDIT_NEWS_ARTICLE;
    news: News;
}

export interface IClearSelectedNewsAction {
    type: typeof CLEAR_SELECTED_NEWS;
}
