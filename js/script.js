let interval;
function next(){
    let currentSlide=document.getElementsByClassName("show")[0];
    currentSlide.classList.toggle("show");
    currentSlide.classList.toggle("hide");
    let nextSlide=currentSlide.nextElementSibling;
    if(! nextSlide){ //when its last child so there is no next
        nextSlide=currentSlide.parentElement.firstElementChild;
    }
    nextSlide.classList.toggle("hide");
    nextSlide.classList.toggle("show");
}
function previous(){
    let currentSlide=document.getElementsByClassName("show")[0];
    currentSlide.classList.toggle("show");
    currentSlide.classList.toggle("hide");
    let preSlide=currentSlide.previousElementSibling;
    if(! preSlide){ //when its first child so there is no previous
        preSlide=currentSlide.parentElement.lastElementChild;
    }
    preSlide.classList.toggle("show");
    preSlide.classList.toggle("hide");
}
function startAutoPlay(){
    interval=setInterval(function(){next();},5000);
}

function stopAutoPlay(){
    clearInterval(interval);
}
startAutoPlay();

document.getElementById("slide").onmouseover=function(){
    stopAutoPlay();
}
document.getElementById("slide").onmouseleave=function(){
    startAutoPlay();
}