
const pianoKey = document.querySelectorAll('.piano-keys .key');

let allKeys = [],
    audio = new Audio('../tunes/a.wav');

const playTune = (key) => {

    audio.src = `../tunes/${key}.wav`;
    audio.play();
    console.log(allKeys);
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');

    setTimeout(() => clickedKey.classList.remove('active'), 150);
};

[...pianoKey].map(key => {
    allKeys.push(ey.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key));
});

const presetKey = (event) => {
    const { key } = event;
    if (allKeys.includes(key)) playTune(key);
};

document.addEventListener('keydown', presetKey);