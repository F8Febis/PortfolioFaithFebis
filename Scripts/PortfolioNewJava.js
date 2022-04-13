var hamburger = document.querySelector("#hamburgbtn");

hamburger.addEventListener("click", uitklap);

function uitklap() {
     let menu = document.querySelector("#menu");
    menu.classList.toggle("toonHamburger");
    let icon = document.querySelector("#hamburgbtn");
    icon.classList.toggle("open");
}
 


var Hamburger = document.querySelector(".toonniet");

function doeHeen() {
    let menu = document.querySelector("#menu");
    menu.classList.remove("toonHamburger");
     let icon = document.querySelector("#hamburgbtn");
    icon.classList.remove("open");

}
Hamburger.addEventListener("click", doeHeen);





const listWrapper=document.querySelector(".list-wrapper").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const page=document.querySelector(".page");
const maxItem=4;
let index=1;

const pagination=Math.ceil(listWrapper.length/maxItem);
console.log(pagination)

prev.addEventListener("click",function(){
    index--;
   check();
    showItems();
})
next.addEventListener("click",function(){
    index++;
    check();
    showItems();
    
})


function check(){
  if(index==pagination){
      next.classList.add("disabled");
  }
    else{
         next.classList.remove("disabled");
        
    }
       
    if(index==1){
        prev.classList.add("disabled");
    }
    else{
         prev.classList.remove("disabled");
    }
        
}
       
       
function showItems() {
     for(let i=0;i<listWrapper.length; i++){
        listWrapper[i].classList.remove("show");
         listWrapper[i].classList.add("hide");
         
        if(i>=(index*maxItem)-maxItem && i<index*maxItem){
        
        listWrapper[i].classList.remove("hide");
             listWrapper[i].classList.add("show");
         }
         page.innerHTML=index;
  
    }   
     
}
window.onload=function(){
    showItems();
    check();
}

// Bron:https://youtu.be/WOPpFddcSCA

