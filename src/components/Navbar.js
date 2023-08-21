import React from 'react'
import Image from '../img/happy-student-with-graduation-hat-diploma-grey.jpg'
const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Sanjay chat</span>
            <div className="user">
                <img src={Image} alt="Hi "/>
                <span>Sanjay</span>
                <button> Log out</button>
            </div>
        </div>
    )
}

export default Navbar
