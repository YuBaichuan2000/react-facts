import React from "react"
import Logo from "../images/react-1-logo-svg-vector.svg"

function Navbar(){
    return (
        <nav className="navbar">
            <div id="left">
                <img src={Logo} alt="react logo" width="40px"/>
                <h1>ReactFacts</h1>
            </div>
            <h3>ReactCourse - Project 1</h3>
        </nav>
        
    )
}

export default Navbar