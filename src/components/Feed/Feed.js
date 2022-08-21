import React, { useState, useEffect } from "react";
import "././Feed.css"
import tinubu from "../../assets/Tinubu.jpeg"
import img from "../../assets/avi.png"
import axios from "axios";


function Feed({postfeed}) {
    
  
  
   let time = new Date().toLocaleString();
    const [cTime, setTime] = useState(time);
    useEffect(() => {
      setInterval(() => {
        setTime(time);
      }, 10000);
    });

    
      return (
        <nav className='feeds'>
            <div>
                  <h2>Instagram</h2>
                  <img src={postfeed.display_url} className="ig-img"/>
                  <div className="time-container">{cTime}</div>
              
            
                <h3></h3>
                <img src={postfeed.node.display_url} alt="Img" className="feed-img"/> 
            </div>
            
        </nav>
      )
    }
  
    
        

export default Feed