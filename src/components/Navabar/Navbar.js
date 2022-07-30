import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="navbar">

            <ul id="list-nav"  >

                <img className ="navbar_img"  src="/images/logo.webp" alt="" />
                <p className="main-header"> <a href="https://www.bwa.org.in/"> Blue World Adventure</a></p>

            </ul>
        </div>
    )
}

export default Navbar