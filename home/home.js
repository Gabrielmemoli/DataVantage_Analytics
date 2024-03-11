var imageno = 1; 
var timer;

displayImg(imageno);

function startTimer() {
    timer = setInterval(function() {
        nextimg(1);
    }, 5000); // 3 segundos
}

function stopTimer() {
    clearInterval(timer);
}

startTimer();

function nextimg(n) {
    displayImg(imageno += n);
}

function currentSlide(n) {
    displayImg(imageno = n);
}

function displayImg(n) {
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    if(n > image.length){
        imageno = 1;
    }
    if(n < 1) {
        imageno = image.length;
    }
    for(i=0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    for(i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    image[imageno - 1].style.display = "block";
    dots[imageno - 1].className += " active";
}

