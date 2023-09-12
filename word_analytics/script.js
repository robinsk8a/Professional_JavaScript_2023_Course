const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");
const maxTwitterChar = 280;
const maxFacebookChar = 2200;

twitterNumberEl.textContent = maxTwitterChar;
facebookNumberEl.textContent = maxFacebookChar;

const inputHandler = () => {
    let numberOfWords = wordsNumberEl.textContent = textareaEl.value.split(' ').length;
    const numberOfCharacters = charactersNumberEl.textContent = textareaEl.value.length;
    const twitterCharLeft = twitterNumberEl.textContent = maxTwitterChar - numberOfCharacters;
    const facebookCharLeft = facebookNumberEl.textContent = maxFacebookChar - numberOfCharacters;

    if (textareaEl.value.includes('<script>')) {
        alert('Hey you MF!\nAre you trying to hack me hommie?\nNo this time, punk. Go home!');
        textareaEl.value = textareaEl.value.replace('<script>', '')
    }
    if (numberOfCharacters === 0) {
        numberOfWords = 0;
        wordsNumberEl.textContent = numberOfWords
    };
    if (twitterCharLeft < 0) {
        twitterNumberEl.classList.add('stat__number--limit');
        twitterNumberEl.textContent = 0
    } else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }
    if (facebookCharLeft < 0) {
        facebookNumberEl.classList.add('stat__number--limit');
        facebookNumberEl.textContent = 0
    } else {
        facebookNumberEl.classList.remove('stat__number--limit');
    }
}

textareaEl.addEventListener('input', inputHandler);
