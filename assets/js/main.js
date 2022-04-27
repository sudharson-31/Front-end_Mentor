let rate = null;
let getter = (val) => 
{
    let ele = document.getElementsByClassName("Rate")[val-1];
    rateReset();
    rate = val;
    ele.style.color = 'hsl(0, 0%, 100%)';
    ele.style.backgroundColor = 'hsl(216, 12%, 54%)';

  
}
let rateReset = () =>
{
    let rate = document.getElementsByClassName("Rate");
    for(i=0;i<rate.length;i++)
    {
        rate[i].style.backgroundColor = ""; 
        rate[i].style.color = "";
    }
}
let thanksModal = () =>
{
    let thanksSlide = document.getElementById("thankyouModal");
    let rateSlide = document.getElementById("rateCard");
    let yourRate = document.getElementById("yourRate");
    rateSlide.style.display = "none";
    thanksSlide.style.display = "flex";
    yourRate.textContent = rate;

}