var home=document.querySelector("#home");
var about=document.querySelector("#about");
var contact=document.querySelector("#contact");


var hometext=document.querySelector("#hometext");
var abouttext=document.querySelector("#abouttext");
var conatcttext=document.querySelector("#contacttext");


// hometext.style.display="block";
// hometext.style.display="50%";

home.addEventListener("click",function(){
    textremove();                                           // calling the function which we have created below
    hometext.style.display="block";                         // firstly the function above will be applied which remove all the text from display, after that this line code will be executed so only the clickable tabs text appear
    hometext.style.display="50%";
    
});


about.addEventListener("click",function(){
    textremove();
    abouttext.style.display="block";
    abouttext.style.width="50%";
});

contact.addEventListener("click",function(){
    textremove();
    contacttext.style.display="block";
    contacttext.style.width="50%";
});



function textremove(){                                                      //function to remove the text from the display
    document.querySelectorAll("h3").forEach(function(h3){                   //selecting all h3 and giving display none
        h3.style.display="none";
    });

    
};










