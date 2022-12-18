
let audio = new Audio('sound\CrashCymbal.mp3');

let btn1 = document.querySelector("button");


btn1.addEventListener('click', () => {
    audio.play();
    console.log(audio);
    console.log("hello world");
});
