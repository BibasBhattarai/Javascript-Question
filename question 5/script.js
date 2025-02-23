var start =document.querySelector("#start");
var stop =document.querySelector("#stop");

var h2=document.querySelector("h2");
var init;                                               //declring the variable in global scope means it can use anywhere where we needed if it is set inside the function then it can be used inside in only that function

start.addEventListener("click",function(){
    var count=0;
    init=setInterval(function(){                    //setiterval is to set time for the function to be applied
        h2.textContent=count;
        count++;
    },1000);
});

stop.addEventListener("click",function(){
    clearInterval(init);
});




