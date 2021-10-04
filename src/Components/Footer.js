import React from 'react'
import "./footer.css"
import img from "./Profile.jpg"
export default function Footer() {
    return (
        <div className="footer">
            <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarImg" src={img} alt="" />
                <p>D33p Resturant ©2027.All right reserved.</p>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">Categories</div>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Punjabi Thali</li>
                    <li className="sidebarListItem">Chinese</li>
                    <li className="sidebarListItem">South Indian</li>
                    <li className="sidebarListItem">Fast Food</li>
                    <li className="sidebarListItem">Vegeterian</li>
                    <li className="sidebarListItem">Non-veg</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">Follow Us</div>
                <ul className="sidebarSocial">
                    <li className="sidebarSocialIcon">facebook</li>
                    <li className="sidebarSocialIcon">instagram</li>
                    <li className="sidebarSocialIcon">twitter</li>
                    <li className="sidebarSocialIcon">gmail</li>
                </ul>
            </div>
        </div>

        </div>
    )
}
