import { useState } from "react";
import Tooltip from "./Tooltip"
export default function Card(){
    const [shareImg, setShareImg] = useState(<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>);
    const shareContainer = document.getElementById("share-image-container");
    const tooltipContainer = document.getElementById("tooltip");
    function onShareHover(){
        setShareImg((prevState)=>{
            prevState = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#fff" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>;
            return prevState;
        })
        shareContainer.style.backgroundColor="hsl(212, 23%, 69%)";
        tooltipContainer.style.display="flex";
    }
    function onShareLeave(){
        setShareImg((prevState)=>{
            prevState=<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>;
            return prevState;
        })
        shareContainer.style.backgroundColor="hsl(210, 46%, 95%)";
        setTimeout(()=>tooltipContainer.style.display="none",1000);
    }
    return (
        <div className="main-box">
            <div className="banner-image-container">
                <img id="banner-image" src={process.env.PUBLIC_URL + "/images/drawers.jpg"} alt="drawers"></img> 
            </div>
            <div className="content-box">
                <div id="heading">
                    <h4>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h4>
                </div>
                <div id="content">
                    <p>Ever been in a room and felt like something was missing? 
                    Perhaps it felt slightly bare and uninviting. 
                    I’ve got some simple tips to help you make any room feel complete.
                    </p>
                </div>
                <div id="profile">
                    <span id="profile-image-container">
                        <img id="profile-image" src={process.env.PUBLIC_URL + "/images/avatar-michelle.jpg"} alt="profile"></img>
                    </span>
                    <div id="details">
                        <span id="name">Michelle Appleton</span>
                        <span id="date">28 Jun 2020</span>
                    </div>
                    <span id="share-image-container" onMouseEnter={onShareHover} onMouseLeave={onShareLeave}>
                        {shareImg}
                        <Tooltip />
                    </span> 
                    
                </div>
            </div>
        </div>
    );
}