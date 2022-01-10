import { findByLabelText } from '@testing-library/react';
import React, { Fragment } from 'react';


const NavBar = () => {
    const myStyle = {
        fontSize: 25,
    }

    const imgStyle = {
        width: 150,
        height: "auto"
    }

    return <Fragment>
        <nav style={myStyle} class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
            <img style={imgStyle} src="pure.jpg" alt="" />
                <a class="navbar-brand" href="#">PURE - SkinCare</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Tips</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Carrito</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </Fragment>
}

export default NavBar;