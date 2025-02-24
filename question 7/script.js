var prg=document.querySelector("#progress");
var h3=document.querySelector("h3");

var count=0;
var init=setInterval(function(){
    if(count===100){
        clearInterval(init);
        h3.style.opacity="1";
    }
    
    count++;
    prg.style.width=count+'%'
},40)