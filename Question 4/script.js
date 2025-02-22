// var add=document.querySelector("#add");
// var remove=document.querySelector("#remove");
// var inps=document.querySelector("input");
// var ul=document.querySelector("ul");
// var li;

// add.addEventListener("click",function(){
//     if(inps.value.trim()===''){}

//     else{
//         li=document.createElement("li");
//         li.textContent=inps.value;
//         ul.appendChild(li);
//         inps.value="";
//     }
// });

// remove.addEventListener("click",function(){
//     ul.removeChild(li);
// })





var add=document.querySelector("#add");
var remove=document.querySelector("#remove");
var inps=document.querySelector("input");
var ul=document.querySelector("ul");
var li;

add.addEventListener("click",function(){
    if(inps.value.trim()===''){}
    else{li=document.createElement("li");
        li.textContent=inps.value;
        ul.appendChild(li);
        inps.value="";
    }

})

remove.addEventListener("click",function(){
    ul.removeChild(li);
})