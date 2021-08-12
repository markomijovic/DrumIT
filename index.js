var drumsArr = document.querySelectorAll(".drum");
for (i = 0; i < drumsArr.length; i++) {
    drumsArr[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        pressedAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (evnt) {
    makeSound(evnt.key);
    pressedAnimation(evnt.key);
});

function makeSound(key) {
    switch (key) {
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
    }
}

function pressedAnimation(key) {
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100);
}
