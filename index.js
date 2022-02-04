for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
var audio = new Audio();

function handleClick() {
  var soundURL = "sounds/skidamarink.mp3";
  switch (this.innerHTML) {
    case 'Baby shark':
      soundURL = "sounds/BabyShark.mp3";
      break;
    case 'Bella Ciao':
      soundURL = "sounds/BellaCiao.mp3";
      break;
    case 'Bum bum bole':
      soundURL = "sounds/BumBumbole.mp3";
      break;
    case 'Dance monkey':
      soundURL = "sounds/DanceMonkey.mp3";
      break;
    case 'Ram sam':
      soundURL = "sounds/RamSamSamDance.mp3";
      break;
    case 'Skidamarink':
      soundURL = "sounds/Skidamarink.mp3";
      break;
    case 'Happy Birthday':
      soundURL = "sounds/HappyBirthday.mp3";
      break;
  }
  audio.pause();
  audio.src = soundURL;
  audio.play();
}
