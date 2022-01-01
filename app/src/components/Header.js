import React from 'react'
import { Link } from 'react-router-dom'
import { MdAddShoppingCart } from "react-icons/md";

function Header() {
    return (
        <section className='header'>
            <nav className="nav">
                <Link to='/' className="nav__logo">
                    ephone
                </Link>
                <div className="nav__item">
                    <Link to='/' className="nav__product">
                        products
                    </Link>
                    <Link to='/cart' className="nav__cart">
                        <MdAddShoppingCart /> cart
                    </Link>
                </div>
            </nav>
            <div className="hero">
                <div className="hero__center-title">
                    <h2 className="hero__title">
                        order now 
                    </h2>
                    <h3 className="hero__subtitle">
                        we have all new brand phones
                    </h3>
                </div>
                <p className="hero__paragraph">
                    Shop for your new phone or bring your own. 
                    You can get Unlimited data plans starting at $29.99/mo per line with 2+ lines.
                </p>
            </div>
        </section>
    )
}

export default Header
