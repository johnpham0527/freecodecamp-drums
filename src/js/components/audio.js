const playAudio = letter => {
    let sound = document.getElementById(letter);
    if (sound) { //play audio only if id was found
      sound.play();
    }
}

export default playAudio;