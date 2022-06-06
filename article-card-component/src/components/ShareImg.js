import Tooltip from "./Tooltip";
import {useState} from "react";
import {isMobile} from "react-device-detect";

let isShareOnFlag = true;
function initialState(){
    return <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
}


export default function ShareImg(){
    const [shareImg, setShareImg] = useState(()=>initialState())
    const shareContainer = document.getElementById("share-image-container");
    const tooltipContainer = document.getElementById("tooltip");
    function onShareHover(){
        if(isShareOnFlag === true){

            setShareImg((prevState)=>{
                prevState = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#fff" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>;
                return prevState;
            })
            isShareOnFlag = !isShareOnFlag;
            shareContainer.style.backgroundColor="hsl(212, 23%, 69%)";
            tooltipContainer.style.display="flex";
            return false;
            
        }
        if(isShareOnFlag === false){

            isShareOnFlag = !isShareOnFlag;
            setShareImg((prevState)=>{
                prevState=<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>;
                return prevState;
            })
            shareContainer.style.backgroundColor="hsl(210, 46%, 95%)";
            tooltipContainer.style.display="none"
            return true;
        }
    }

    return (                    
    <span id="share-image-container" onClick={isMobile? (false): onShareHover} onTouchStart={onShareHover}>
        {shareImg}
        <Tooltip />
    </span> 
    )

}