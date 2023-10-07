import React from 'react'
import './Card.css'

const Card = ({ imageUrl }) => {
    return (
        <div className='project'>
            <img src={imageUrl} />
        </div>
    )
}

export default Card