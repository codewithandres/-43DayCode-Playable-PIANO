
const pianoKey = document.querySelectorAll('.piano-keys .key'),
    volumenSlider = document.querySelector('.volume-slider input'),
    keyCheckBox = document.querySelector('.keys-checkbox input');

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
    allKeys.push(key.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key));
});

const showHideKeys = () => {
    [...pianoKey].map(key => key.classList.toggle('hide'));
};

const handleVolumen = ({ target }) => {
    audio.volume = target.value;
    console.log(audio.volume);
};

const presetKey = (event) => {
    const { key } = event;
    if (allKeys.includes(key)) playTune(key);
};

keyCheckBox.addEventListener('click', showHideKeys);
volumenSlider.addEventListener('input', handleVolumen);
document.addEventListener('keydown', presetKey);