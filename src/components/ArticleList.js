import React, {useContext, useEffect} from 'react'
import ArticleContext from '../context/article/ArticleContext'
import ArticleCard from './ArticleCard'
const ArticleList = () => {
    const articleContext = useContext(ArticleContext)
    //get value state
    const {getPosts, articles, loading} = articleContext

    useEffect(() =>{
        getPosts()
    }, [])

    console.log(articles);

    return (
        <div className="articles">
            <div className="container">
                <h2>Articles</h2>
                {
                    !loading ? (
                        <div className="articles-grid-container">
                            {
                                articles.map((article, index) => {
                                    return (
                                        <ArticleCard
                                            key={index} 
                                            id={article.id}
                                            title={article.title}
                                            image={article.image}
                                            author={article.author}
                                            date={article.date}
                                        />
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <div><h4>Loading...</h4></div>
                    )
                }
            </div>
        </div>
    )
}

export default ArticleList
