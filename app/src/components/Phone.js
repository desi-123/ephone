import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'


function Phone({ ephone }) {
    return (
        <article className='ephone'>
            <img src={ephone.image} alt="ephone image" className="ephone__img" />
            <div className='ephone__name'>
                <Link to={`ephone/${ephone.id}`} className='ephone__name--link'>
                    <h4>{ephone.name}</h4>
                </Link>
            </div>
            <div className="ephone__price">
                <p>${ephone.price}</p>
            </div>
            <div className='ephone__rating'>
                <Rating 
                    value={ephone.rating}
                    text={`${ephone.numReviews} reviews`}
                />
            </div>
            <Link to={`ephone/${ephone.id}`} className="btn ephone__btn">
                Phone Details
            </Link>
        </article>
    )
}

export default Phone
