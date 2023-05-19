import {News} from '../../types/newsTypes';
import {
    AddNewsArticleAction,
    ClearSelectedNewsAction,
    DeleteNewsArticleAction,
    EditNewsArticleAction,
    SelectNewsArticleAction,
} from './types/newsActionTypes';

export const ADD_NEWS_ARTICLE = 'ADD_NEWS_ARTICLE';
export const DELETE_NEWS_ARTICLE = 'DELETE_NEWS_ARTICLE';
export const SELECT_NEWS_ARTICLE = 'SELECT_NEWS_ARTICLE';
export const EDIT_NEWS_ARTICLE = 'EDIT_NEWS_ARTICLE';
export const CLEAR_SELECTED_NEWS = 'CLEAR_SELECTED_NEWS';

export const addNewsAricleAction = (news: News): AddNewsArticleAction => ({
    type: ADD_NEWS_ARTICLE,
    news,
});

export const deleteNewsAricleAction = (id: string): DeleteNewsArticleAction => ({
    type: DELETE_NEWS_ARTICLE,
    id,
});

export const selectNewsAricleAction = (news: News): SelectNewsArticleAction => ({
    type: SELECT_NEWS_ARTICLE,
    news,
});

export const editNewsAricleAction = (news: News): EditNewsArticleAction => ({
    type: EDIT_NEWS_ARTICLE,
    news,
});

export const clearSelectedNewsAction = (): ClearSelectedNewsAction => ({
    type: CLEAR_SELECTED_NEWS,
});
