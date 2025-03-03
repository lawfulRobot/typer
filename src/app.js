import { generate } from "random-words";

const setSize = 10;
let wordSet = [];
let currentWord = '';
let typedWord = '';
let currentWordIdx = -1;
let isLastWord = false;
let isPlaying = true;
let isErrorTimerActive = false;
let isMuted = false;

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function newWordSet() {
    wordSet = generate(setSize);
}

function updateDisplay(isWrong = false) {
    const inputDisplay = document.getElementById('input-display');
    if (isWrong) {
        const correctPart = currentWord.slice(0, typedWord.length - 1);
        const wrongPart = currentWord[typedWord.length - 1];
        const remainingPart = currentWord.slice(typedWord.length);
        inputDisplay.innerHTML = `<span class="correct">${correctPart}</span><span class="wrong">${wrongPart}</span><span class="remaining">${remainingPart}</span>`;
    } else {
        inputDisplay.innerHTML = `<span class="correct">${typedWord}</span><span class="remaining">${currentWord.slice(typedWord.length)}</span>`;
    }
}

function animateWord(word) {
    const wordElement = document.createElement('div');
    wordElement.className = 'falling-text';
    wordElement.textContent = word;
    document.body.appendChild(wordElement);

    const randomInitialX = Math.random() * 80 + 10;
    const randomDuration = Math.random() * 1.5 + 1;

    wordElement.style.position = 'fixed';
    wordElement.style.left = `${randomInitialX}%`;
    wordElement.style.top = '0';
    wordElement.style.transform = 'translateX(-50%)';

    requestAnimationFrame(() => {
        wordElement.style.transform = 'translateY(100vh)';
        wordElement.style.transitionDuration = `${randomDuration}s`;
        wordElement.style.opacity = '0';
    });

    wordElement.addEventListener('transitionend', () => {
        wordElement.remove();
    });
}

function playSound(key, duration) {
    if (isMuted) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';

    const baseFrequency = 200;
    const keyOffset = key.charCodeAt(0) - 'a'.charCodeAt(0);
    const frequency = baseFrequency + keyOffset * 20;

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}

function setNewWord() {
    currentWordIdx++;
    if (currentWordIdx >= wordSet.length) {
        isLastWord = true;
        handleLastWord();
        return;
    }
    currentWord = wordSet[currentWordIdx];
    typedWord = '';
    updateDisplay();
}

function handleLastWord() {
    isPlaying = false;
    newWordSet();
    currentWordIdx = -1;
    isLastWord = false;
    setNewWord();
    isPlaying = true;
}

document.addEventListener('keydown', (event) => {
    if (!isPlaying || event.repeat || isErrorTimerActive) return;
    if (!/^[a-zA-Z]$/.test(event.key)) return;

    typedWord += event.key.toLowerCase();

    if (currentWord.substr(0, typedWord.length) !== typedWord) {
        updateDisplay(true);
        isErrorTimerActive = true;
        playSound(event.key.toLowerCase(), 0.25);
        setTimeout(() => {
            isErrorTimerActive = false;
            if (isLastWord) {
                handleLastWord();
                return;
            }
            setNewWord();
        }, 1000);
        return;
    }
    animateWord(event.key);
    playSound(event.key.toLowerCase(), 0.1);

    if (typedWord === currentWord) {
        if (isLastWord) {
            handleLastWord();
            return;
        }
        if (currentWordIdx >= 0 && currentWordIdx < wordSet.length) {
            animateWord(currentWord);
        }
        setNewWord();
    }
    updateDisplay();
});

function toggleMute() {
    isMuted = !isMuted;
    const muteButton = document.getElementById('mute-button');
    muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
}

function init() {
    newWordSet();
    setNewWord();
    const muteButton = document.getElementById('mute-button');
    muteButton.addEventListener('click', toggleMute);
}

document.addEventListener('DOMContentLoaded', init);
