import React,{useReducer} from 'react' 
import ArticleContect from './ArticleContext'
// import {getPosts} from '../../actions/articleAction'
import {articleReducer} from '../../reducers/articleReducer'
import {SENDING_REQUEST, REQUEST_FINISHED, SET_POSTS, SET_POST} from '../../constants/actionType'

const ArticleProvider = (props) =>{
    const initialState = {
        articles: [],
        currentArticlePost: null,
        loading: true
    }
    const [state, dispatch] = useReducer(articleReducer, initialState)

    const getPosts = async () =>{
    
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
    
    const getPostById = async (id) =>{
    
        try {
            const res = await fetch(`http://localhost:5000/posts/${id}`)
            const data = await res.json()
            dispatch({type: SENDING_REQUEST})
            dispatch({type: REQUEST_FINISHED})
            dispatch({type: SET_POST, payload: data})
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <ArticleContect.Provider value={
            {
                articles: state.articles,
                currentArticlePost: state.currentArticlePost,
                loading: state.loading,
                getPosts: getPosts,
                getPostById: getPostById
            }

        }>
            {props.children}
        </ArticleContect.Provider>
    )
}

export default ArticleProvider