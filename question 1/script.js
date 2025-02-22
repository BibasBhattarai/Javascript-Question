//Create a html page with button. when the button is clicked ,change the text of paragraph element.

var btn=document.querySelector("button");
var p=document.querySelector("p")

btn.addEventListener("click",function(){
    p.textContent="My name is bibas bhattarai";
    p.style.color="Red";
})