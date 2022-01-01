import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cart from './components/Cart'
import PhoneDetails from './components/PhoneDetails'
import Home from './components/Home'

function App() {
    return (
        <Router>
            <div className='container'>
                <Sidebar />
                <Header />
                <Route exact path='/' component={Home} />
                <Route exact path='/ephone/:id' component={PhoneDetails} />
                <Route path='/cart' component={Cart} />
                <Footer />
            </div>
        </Router>
    )
}

export default App
