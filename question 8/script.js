var input=document.querySelector("input")


var data =[
    {name:"Lamine Yamal", src:"https://img.uefa.com/imgml/TP/players/1/2025/324x324/250176450.jpg"},
    {name:"Pedri", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYNKCgOiUaW65dm5RKT_5v-3aNNJdajk7mw&s"},
    {name:"Gavi", src:"https://b.fssta.com/uploads/application/soccer/headshots/93849.png"},
    {name:"Frankie De jong", src:"https://img.uefa.com/imgml/TP/players/1/2025/324x324/50327423.jpg"},
    {name:"pau Cubarsi", src:"https://www.zerozero.pt/img/jogadores/new/54/45/1035445_pau_cubarsi_20240914123715.png"},
    {name:"Raphina", src:"https://images.sports.gracenote.com/images/lib/basic/person/pp_nationalteam/600/1483113.jpg"},
    {name:"Pedro", src:"https://i.pinimg.com/474x/8e/88/3e/8e883e8964b6349ebfacf6f85f5853d3.jpg"},

];



var pers="";
data.forEach(function(elem){
    pers +=`<div class="person">
    <div class="img">
    <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`
})

document.querySelector(".people").innerHTML=pers;


input.addEventListener("input",function(){
    // console.log(input.value);
    var matching=data.filter(function(e){
        return e.name.startsWith(input.value)
    })

    var newusers="";
    matching.forEach(function(elem){
        newusers +=`<div class="person">
        <div class="img">
        <img src="${elem.src}" alt="">
        </div>
        <h4>${elem.name}</h4>
    </div>`
    })
    
    document.querySelector(".people").innerHTML=newusers;
})