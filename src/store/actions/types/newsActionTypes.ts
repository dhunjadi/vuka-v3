import {INews} from '../../../data/newsList';
import {ADD_NEWS_ARTICLE, DELETE_NEWS_ARTICLE} from '../newsActons';

export interface IAddNewsArticle {
    type: typeof ADD_NEWS_ARTICLE;
    news: INews;
}

export interface IDeleteNewsArticle {
    type: typeof DELETE_NEWS_ARTICLE;
    id: string;
}
