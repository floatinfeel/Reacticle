import {SENDING_REQUEST, REQUEST_FINISHED, SET_POSTS} from '../constants/actionType'

export const getPosts = async (dispatch) =>{
    
    try {
        const res = await fetch('http://localhost:5000/posts')
        const data = await res.json()
        dispatch({type: SENDING_REQUEST})
        dispatch({type: REQUEST_FINISHED})
        dispatch({type: SET_POSTS, payload: data})
    } catch (error) {
        console.log(error);
    }
}