import React,{Fragment}from 'react'
import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from "react-bootstrap"
function Navigation() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
                <div className="container">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Features</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">signin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">sigiUP</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navigation
