import React from 'react'
import { Link } from 'react-router-dom'

const SearchBarCategories = ({category}) => {
    
    const content = () => {
        return (
            <Link to={`/${category.keyword}`}>
                <div 
                    className={`category-container`}>
                    <div className='category-cover div-image' style={{ backgroundImage: `url(${category.photo}`}}>
                        <div className="category-name">
                            <h1>{category.keyword}</h1>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
    return content()
}

export default SearchBarCategories




