

function loadVideo(){
    myMovie=document.getElementById('myMovie');
    myMovie.addEventListener('click', playOrPause, false);
}
function playOrPause() {
    if (!myMovie.paused && !myMovie.ended){
        myMovie.pause();
    } else {
        myMovie.play();
    }
}
window.addEventListener('load',loadVideo,false);