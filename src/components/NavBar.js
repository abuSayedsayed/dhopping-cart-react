import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <h2> <Link className="navbar-brand" to="/">Add To <span className="text-danger">Cart</span></Link></h2>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="./cart">Cart</Link>
                        </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default NavBar
