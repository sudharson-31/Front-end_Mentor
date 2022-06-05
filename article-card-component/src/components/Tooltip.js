export default function Tooltip(){
    return (
        <div className="tooltip-invisible" id="tooltip">
            <span id="title">
                SHARE
            </span>
            <span className="icons">
                <span className="icon">
                   <a href="https://www.facebook.com/" target="_blank"><img src={process.env.PUBLIC_URL+'/images/icon-facebook.svg'} alt="facebook"></img></a> 
                </span>
                <span className="icon">
                    <a href="https://www.twitter.com/" target="_blank"><img src={process.env.PUBLIC_URL+'/images/icon-twitter.svg'} alt="twitter"></img></a>
                </span>
                <span className="icon">
                    <a href="https://www.pinterest.com/" target="_blank"><img src={process.env.PUBLIC_URL+'/images/icon-pinterest.svg'} alt="pinterest"></img></a>
                </span>
            </span>
        </div>
        
    );
}