import React from 'react'
import "./navbar.css"
export default function Navbar(props) {
    const {filterItem,navButton} = props;
    return (
        <>
         <nav className="navbar">
            <div className="btnBox">
                {navButton.map((element)=>{
                   return (<button key={element} className="btnBoxItem" onClick={()=>filterItem(element)}>{element}</button>
                )})
                }
            </div>
        </nav>   
        </>
    )
}
