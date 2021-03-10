const querty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0;

const startBtn = document.querySelector('a.btn__reset'); //dont use spaces
const overlay = document.getElementById('overlay');

const ul = phrase.querySelector('ul');

const hearts = document.querySelectorAll('.tries img');

//3.Attach a event listener to the “Start Game” button to hide the start screen overlay.

startBtn.addEventListener('click', () => {
   overlay.style.display = 'none'; 
});

//4. Create a phrases array that contains at least 5 different phrases as strings.
const arrPhrases = [
    'Iron Man',
    'Captain America',
    'Guardians of the Galaxy',
    'The Incredible Hulk',
    'Avengers EndGame',
    'Doctor Strange',
    'Black Panther',
    'SpiderMan',
    'Black Widow',
    'Captain Marvel'
];

//5. Create a getRandomPhraseAsArray function.

function getRandomPhraseAsArray(arr) {
    let nPhrase = (Math.floor(Math.random() * arr.length));
    return nPhrase;
};

let nPhrase = getRandomPhraseAsArray(arrPhrases);
/* debug
console.log(nPhrase); */

//6. Set the game display

function addPhraseToDispaly(arr){
    for (let i = 0; i < arr.length; i++) {
        let list = document.createElement('li');
        list.textContent = arr[i];
        ul.appendChild(list);
            if( arr[i] === ' '){
                list.className = 'space';
            } else {
                list.className = 'letter';
                /* Debug
                 console.log(list); */
            }
    }
};

addPhraseToDispaly(arrPhrases[nPhrase]); 

/* debug 
console.log(arrPhrases[nPhrase]); */

//7. Create a checkLetter function
function checkLetter(btn) {
    // btn.disable = true;
    let check = document.getElementsByClassName('letter');
    let match = null;

    for (let i = 0; i < check.length; i++) {
        if(btn.textContent.toLowerCase() === check[i].textContent.toLowerCase()) {
            check[i].className = 'show';
            match = check[i];
            /* Debug
             console.log(match);*/
            match = true;
        }    
    } 
    return match;
}

//8. Add an event listener to the keyboard.
qwerty.addEventListener('click', (e) => {
    if(e.target.tagName == 'BUTTON'){
        e.target.className = 'chosen';
        e.target.disabled = true;
    } else  { 
        alert('Please choose a letter');
    }
    let btnCheck = checkLetter(e.target);
    // Debug
    // console.log(btnCheck);
    if (e.target.tagName == 'BUTTON' && btnCheck === null){
        console.log('miss!');
        hearts[missed].src="images/lostHeart.png";
        missed += 1; 
    } else {
        console.log('got it')
    }
    checkWin()
}); 

 function  checkWin() {
    let letterFound = document.querySelectorAll('.letter');
    let show = document.getElementsByClassName('.show');
    // Debug
    //console.log(show);
        if (letterFound.length === show.length){
            overlay.className = 'win';
            overlay.style.display = 'flex';
            document.querySelector('h2').textContent = "Winner";
            } else if (missed > 4) {
            overlay.className = 'lose';
            overlay.style.display = 'flex';
            document.querySelector('h2').textContent = "you lose"
        }
}; 
