import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
    return (
        <header>
        <h1>Relojeria Neyra</h1>
        <nav>
            <ul>
                <li>Todos</li>
                <li>Hombres</li>
                <li>Mujeres</li>
                <li>Unisex</li>
            </ul>
        </nav>
        <CartWidget/>
        </header>
    )
}

export default NavBar