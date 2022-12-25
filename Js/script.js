let firstimage = document.getElementById("firstimage");
let secondimage = document.getElementById("secondimage");
let thirdimage = document.getElementById("thirdimage");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
second.addEventListener("click",function(){
    firstimage.style.display = "none";
    thirdimage.style.display = "none";
    setTimeout(changeone,1000);
})
third.addEventListener("click",function(){
    firstimage.style.display = "none";
    secondimage.style.display = "none";
    setTimeout(changetwo,1000);
})
first.addEventListener("click",function(){
    secondimage.style.display = "none";
    thirdimage.style.display = "none";
    setTimeout(changethree,1000);
})
function changeone(){
    secondimage.style.display = "block";
    secondimage.style.marginLeft = "590px";
}
function changetwo(){
    thirdimage.style.display = "block";
    thirdimage.style.marginLeft = "590px";
}
function changethree(){
    firstimage.style.display = "block";
    firstimage.style.marginLeft = "590px";
}