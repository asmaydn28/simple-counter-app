let sayac = 0;
function myFunction() {
    sayac = sayac + 1;
    document.getElementById("number").innerHTML =sayac;
}

let audio = document.getElementById("myAudio");
function playMusic(){
    audio.play();
}
function pauseMusic() {
    audio.pause();
}
