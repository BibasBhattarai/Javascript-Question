// var frm=document.querySelector("form");
// var inp1=document.querySelector("#inp1");
// var inp2=document.querySelector("#inp2");
// var h4=document.querySelector("#error");

// frm.addEventListener("submit",function(event){
//     event.preventDefault();
//     if(inp1.value==='' || inp2.value ===''){
//         h4.textContent="we have some error";
//         h4.style.color="red";
//     }

//     else{
//        h4.textContent="";
//        h4.style.color="black";
//     }
// });




// var frm=document.querySelector("form");
// var inps=document.querySelectorAll('input[type="text"]');
// var h4=document.querySelector("#error");

// frm.addEventListener("submit",function(event){
//     event.preventDefault();
//     // console.log(inps.length);    // It will show the length or amount of inps here we have
//     for(var i=0; i<inps.length; i++){
//         if(inps[i].value.trim()===''){
//             h4.textContent="Error we have";
//             h4.style.color="red";
//             break;
//         }
//         else{
//             h4.textContent="";
//             h4.style.color="black";
//         }
//     }
    
   
// });





var frm=document.querySelector("form");
var inps=document.querySelectorAll('input[type="text"]');
var h4=document.querySelector("#error");


frm.addEventListener("submit", function(event){
    event.preventDefault();
    for(i=0;i<inps.length;i++){
        if(inps[i].value.trim()===''){
            h4.textContent="We have error";
            h4.style.color="red";
            break;
        }
        else{
            h4.textContent="";
            h4.style.color="red";
        }
    }
});