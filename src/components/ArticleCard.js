import React from 'react'
import {Link} from 'react-router-dom'

const ArticleCard = ({title, image, author, date, id}) => {
    return (
        <div className="card">
            <div className="card-image" style={{
                width: '100%',
                height: '200px',
                backgroundImage: `url('${image}')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                borderTopColor: '2px',
                borderTopRightRadius: '2px'

            }}>
            </div>
            <div className="card-info">
                <div className="card-title">
                    <Link to={`/${id}`}>
                        <h5> {title} </h5>
                    </Link>
                </div>
                <div className="card-author-section">
                   <p> {author} </p>
                   <p> {date} </p>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
