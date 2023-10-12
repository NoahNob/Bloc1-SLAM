'use strict'

const $=function(id){
    return document.getElementById(id);
};


const bt = $("bt-hello");
bt.addEventListener("click", function f(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
});
$("bt-clear").addEventListener("click", function(){
    document.body.innerHTML="";
});

const $=(id)=>document.getElementById(id);

const addEvt=function (type,id,listener){
    const elm=$(id);
    elm && elm.addEventListener-(type,listener);
}

addEvt("click", "bt-bg", function(){
    const color=$("selected-color").value;
    document.body.style.backgroundColor=color;
})



$("bt-dom").addEventListener("click", function(){
    const h2=document.createElement("h2");
    h2.innerText=("SOUS TITRE AJOUTÉ DYNAMIQUEMENT");
    $("content").appendChild(h2);
    const img=document.createElement("img");
    img.src="https://media.tenor.com/tFIicz8nikQAAAAC/auuuuuuhhhh-aaaaaaa.gif"
    img.style.width="200px"
    $("content").appendChild(img);
});
