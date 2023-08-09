var a = document.querySelectorAll(".drum").length;
for (var i = 0; i < a; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", saurav);
    function saurav() {
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    }
}
document.addEventListener("keypress",sable);
function sable(event) {
    makeSound(event.key);
    animation(event.key);
}
function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            case "a":
                var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            case "s":
                var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            case "d":
                var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            case "j":
                var audio = new Audio("sounds/snare.mp3")
            audio.play();
            case "k":
                var audio = new Audio("sounds/crash.mp3")
            audio.play();
        default:
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
    }
}
function animation(currentkey)
{
    var activebutton=document.querySelector("."+ currentkey).classList.add("pressed");
    setTimeout(function(){
        var activebutton=document.querySelector("."+ currentkey).classList.remove("pressed");
    },100)
}
// var audio=new Audio("sounds/tom-1.mp3")
//         audio.play();
// this.style.color= ("red");