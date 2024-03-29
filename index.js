var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    // console.log("Clicked button: " + buttonInnerHTML);
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var kick = new Audio("snare.mp3");
        kick.play();
        break;

      case "k":
        var snare = new Audio("crash.mp3");
        snare.play();
        break;

      case "l":
        var crash = new Audio("kick-bass.mp3");
        crash.play();
        break;

      default:
        console.log(buttonInnerHTML);
    }
  });
}
