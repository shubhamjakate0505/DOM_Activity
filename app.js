let btn=document.querySelector('button')

btn.addEventListener("click",function (){
   
    let h1=document.querySelector('h1');
    let randomcolor=israndom();
    h1.innerText=randomcolor;

    let div=document.querySelector('.box');
   
    if(div){
        div.style.backgroundColor=randomcolor;
    }else{
        console.error("Error: Element with class 'box' not found.");
    }
    console.log("Color updated");

});


function israndom(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb( ${red},${green},${blue})`
    return color;
    // let color=console.log(randomcolor) ;
    
}