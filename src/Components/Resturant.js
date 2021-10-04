import React, { useState } from 'react'
import "./resturant.css"
import Menu from "./Menuapi.js"
import MenuCard from './MenuCard'
import Navbar from './Navbar'
export default function Resturant() {
    const [menudata, setMenudata] = useState(Menu)
    const filterItem = (category) => {
        if (category === "All") {
            setMenudata(Menu)
            return;
        }
        const updatedList = Menu.filter((element) => {
            return element.category === category;
        })
        setMenudata(updatedList)
    }
    const uniqueList = [...new Set(Menu.map((element) => {
        return element.category;
    })
    ),
        "All",
    ]

    const [navButton, setNavButton] = useState(uniqueList)
    if (navButton.length === 0) {
        setNavButton("nothing to show")
    }
    const keyword = (serachvalue)=>{
        const upperSearchValue = serachvalue.toUpperCase();
        console.log(upperSearchValue)       
            const nameSearch = Menu.filter((element) => {
                return element.name.toUpperCase().includes(upperSearchValue); 
            })
            setMenudata(nameSearch)
    }
    return (
        <>
           <div className="inputBox" style={{position:"sticky",top:"0",zIndex:"999"}}>
                <input type="Search"  onChange={(e)=>keyword(e.target.value)} placeholder="Search Items" />
            </div>
            <div className="resturant">
                <div className="mainContainer">
                    <div className="resturantSidebar" style={{position:"sticky",bottom:"0"}}>
                        <Navbar navButton={navButton} filterItem={filterItem} style={{position:"sticky",left:"0"}}/>
                    </div>
                    <div className="resturantContainer">
                        <MenuCard menudata={menudata} />
                    </div>
                </div>
            </div>
        </>
    )
}
