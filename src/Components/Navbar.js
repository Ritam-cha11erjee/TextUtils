import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom';

export default function(props){

    return(

        <>
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg" style = {{backgroundColor: props.theme.secondary}}>
        <div className="container-fluid" style = {{color: props.theme.tertiary}}>
            <a className="navbar-brand" style = {{color: props.theme.tertiary}} href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
<<<<<<< Updated upstream
                <a className="nav-link active" aria-current="page" style = {{color: props.theme.tertiary}} href="/TextUtils/">Home</a>
=======
                <Link className="nav-link active" aria-current="page" style = {{color: props.theme.tertiary}} to="/TextUtils/">Homee</Link>
>>>>>>> Stashed changes
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/TextUtils/about" style = {{color: props.theme.tertiary}}>About</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style = {{color: props.theme.tertiary}}>
                    Dropdown
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" style = {{color: props.theme.tertiary}}>Disabled</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit" style = {{color: props.theme.tertiary}}>Search</button>
            </form>
            </div>
        </div>
        </nav>
        </BrowserRouter>
        </>
    );
}