let num1=document.querySelector(".num1");
let num2=document.querySelector('.num2');
let add=document.querySelector(".add");
let sub=document.querySelector(".sub");
let mult=document.querySelector(".mult");
let div=document.querySelector(".div");
let res=document.querySelector(".res");

add.addEventListener("click",()=>{
    let n1=parseInt(num1.value);
let n2=parseInt(num2.value);
    res.innerText=`Result : ${n1+n2}`;
})
sub.addEventListener("click",()=>{
    let n1=parseInt(num1.value);
let n2=parseInt(num2.value);
    res.innerText=`Result : ${n1-n2}`;
})
mult.addEventListener("click",()=>{
    let n1=parseInt(num1.value);
let n2=parseInt(num2.value);
    res.innerText=`Result : ${n1*n2}`;
})
div.addEventListener("click",()=>{
    let n1=parseInt(num1.value);
let n2=parseInt(num2.value);
    res.innerText=`Result : ${n1/n2}`;
})
