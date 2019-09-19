function removeTransition (evt) {
    if (evt.propertyName !== 'transform') {
        return;
    }
    
    this.classList.remove('playing');
}

function playSound (evt) {
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${evt.keyCode}"]`);

    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
