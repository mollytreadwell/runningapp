import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Navpill(){
    return (
        <Nav className="pill">
        <ul className="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./About">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./Races">Race List</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./Community">Community</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./Contact">Contact</a>
        </li>
        </ul>
        </Nav>
    )
}