import ShareImg from "./ShareImg"

export default function Card(){
    
    
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
                    <ShareImg />
                </div>
            </div>
        </div>
    );
}