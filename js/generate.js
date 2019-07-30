let generate = " ";
for (let ii = 0; ii < touches.length; ii++) {
    generate += '<span class="w' + ii + ' col-sm" onclick="' + touches[ii].oc + '">';
    generate += '<div data-key="' + touches[ii].dk + '" class="key">';
    generate += '<kbd>' + touches[ii].upper + '</kbd>';
    generate += '<span class="sound">' + touches[ii].lower + '</span>';
    generate += '</div>';
    generate += '<div class="touches"></div>';
    generate += '</span>'
}

document.getElementById("PianoGen").innerHTML = generate;

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');


    key.classList.remove('playing');
    audio.currentTime = 0;
    audio.play();
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
