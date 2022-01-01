import React from 'react'
import { Link } from 'react-router-dom'
import ephones from '../data/ephones'

function PhoneDetails({match}) {
    const ephone = ephones.find((ephon) => ephon.id == match.params.id)
    return (
        <section className='ephone-details'>
            <Link to='/' className='btn btn__link'>
                go back
            </Link>
            <div className="ephone-details__detail">
                <img src={ephone.image} alt={ephone.name} />
            </div>
            <div>{ephone.name}</div>
        </section>
    )
}

export default PhoneDetails
