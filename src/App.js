import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import './styles.css';


function App(){
    return (
        <div>
            <div className="container">
                <Navbar />
                <Main />  
            </div> 
            <div className="attribution">
                Coded by <a target="_blank" href="https://www.linkedin.com/in/george-yu-a6800a227/">George Yu🐱</a>.
            </div>
        </div>  
    )
}

export default App
