import React, {useEffect, useContext} from 'react'
import ArticleContext from '../context/article/ArticleContext'
import {useParams} from 'react-router-dom'

const Article = () => {
    const articleContext = useContext(ArticleContext)
    
    const {getPostById, currentArticlePost} = articleContext
    let {articleId} = useParams()

    useEffect(() => {
        getPostById(articleId)
    }, [])

    return (
        <div className="article">
            {
                currentArticlePost ? (
                    <>
                        <div className="article-image" style={{
                            width: '100%',
                            height: '300px',
                            backgroundImage: `url('${currentArticlePost.image}')`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            position: 'relative',
                            borderTopColor: '2px',
                            borderTopRightRadius: '2px'

                        }}>
                        </div>
                        <div className="article-content">
                            <h2> {currentArticlePost.title} </h2>
                            <p align="justify"> &nbsp; &nbsp;&nbsp; {currentArticlePost.content} </p>
                        </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    )
}

export default Article
