import {SENDING_REQUEST, REQUEST_FINISHED, SET_POSTS, SET_POST} from '../constants/actionType'

export const articleReducer =  (state, action) =>{
    switch (action.type) {
        case SENDING_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REQUEST_FINISHED:
            return{
                ...state,
                loading: false
            }
        case SET_POSTS:
            return{
                ...state,
                articles: action.payload
            }
        case SET_POST:
            return{
                ...state,
                currentArticlePost: action.payload
            }
        default:
            return state
    }
}