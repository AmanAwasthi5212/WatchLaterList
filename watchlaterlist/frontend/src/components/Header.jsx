import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand" ><span style={{ fontSize: 30, color: 'red' }}>W</span>atch <span style={{ fontSize: 30, color: 'red' }}>L</span>ater <span style={{ fontSize: 30, color: 'red' }}>L</span>ist</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/AddToList'} className="btn btn-dark" aria-current="page" >Add To List</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
