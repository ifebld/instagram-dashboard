import React from 'react'
import "././TopBar.css"
import img from "../../assets/avi.png"

function TopBar() {
  return (
    <nav>
        <div className="logo"><h1>Instagram</h1>
            <ul>
                <li>FullName</li>
                <li>userName</li>
                <img src={img} className="logo-img"/>
            </ul>
        </div>
    </nav>
  )
}

export default TopBar