import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="jumbotron bg-light">
            <h1 className="display-3 text-center">Albums</h1>
            <div className="d-flex justify-content-center">
            <Link className='btn btn-light border-dark' to={'/'}>Show All Albums</Link>
            </div>
        </div>
    )
}

export default Header