for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        ms(this.innerHTML);
        animate(this.innerHTML);
    });
}

document.addEventListener("keypress",function (y) {
   ms(y.key); 
   animate(y.key);
});

function ms(x){

    switch (x) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio('sounds/snare.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "j":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "k":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "l":
            new Audio('sounds/tom-4.mp3').play();
            break;
    
        default:
            console.log(this.innerHTML);
            break;
    }

}
function animate(x){
    document.querySelector("."+x).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+x).classList.remove("pressed")
    },150);
}
