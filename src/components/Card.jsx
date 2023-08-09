import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const { url, id } = data;
    return (
        <Link to={`/${id}`}>
            <div className="w-80 overflow-hidden">
                <img className="h-60 hover:scale-105 transition-all rounded w-full object-fill object-center" src={url} alt="content" />
            </div>
        </Link>
    )
}

export default Card