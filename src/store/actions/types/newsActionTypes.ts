import {INews} from '../../../data/newsList';
import {ADD_NEWS_ARTICLE, DELETE_NEWS_ARTICLE, EDIT_NEWS_ARTICLE, SELECT_NEWS_ARTICLE} from '../newsActons';

export interface IAddNewsArticleAction {
    type: typeof ADD_NEWS_ARTICLE;
    news: INews;
}

export interface IDeleteNewsArticleAction {
    type: typeof DELETE_NEWS_ARTICLE;
    id: string;
}

export interface ISelectNewsArticleAction {
    type: typeof SELECT_NEWS_ARTICLE;
    news: INews;
}

export interface IEditNewsArticleAction {
    type: typeof EDIT_NEWS_ARTICLE;
    news: INews;
}
