import {News} from '../../../types/newsTypes';
import {ADD_NEWS_ARTICLE, CLEAR_SELECTED_NEWS, DELETE_NEWS_ARTICLE, EDIT_NEWS_ARTICLE, SELECT_NEWS_ARTICLE} from '../newsActons';

export interface AddNewsArticleAction {
    type: typeof ADD_NEWS_ARTICLE;
    news: News;
}

export interface DeleteNewsArticleAction {
    type: typeof DELETE_NEWS_ARTICLE;
    id: string;
}

export interface SelectNewsArticleAction {
    type: typeof SELECT_NEWS_ARTICLE;
    news: News;
}

export interface EditNewsArticleAction {
    type: typeof EDIT_NEWS_ARTICLE;
    news: News;
}

export interface ClearSelectedNewsAction {
    type: typeof CLEAR_SELECTED_NEWS;
}
