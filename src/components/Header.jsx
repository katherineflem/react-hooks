import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="jumbotron bg-light">
            <h1 className="display-3 text-center">Albums</h1>
            <Link className='btn btn-light border-dark' to={'/'}>Show All Albums</Link>
        </div>
    )
}

export default Header