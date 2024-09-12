let low = 0;
let high = 10001;
let guess = Math.floor((low + high) / 2);

const guessElement = document.getElementById('guess');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const resetElement = document.getElementById('reset');
const buttonsElement = document.getElementById('buttons');
const questioncountElement = document.getElementById('question-count');
const questioncounttextElement = document.getElementById('question-count-text');
const answercountElement = document.getElementById('answer-count');

function updateGuess() {
    console.log(low);
    console.log(high);
    if (high - low > 1) {
        guess = Math.floor((low + high) / 2);
        guessElement.textContent = guess;
    }
    else {
        resultElement.textContent = `答えは ${low} です！`;//ac=low,wa=highなのでlowが正しい答え

        //idを貰ったやつに、.style.display="none";で表示しないようにできるっぽい

        resultElement.style.display = "inline";
        questionElement.style.display = 'none';
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        //buttonsElement.style.display='none';
        resultElement.style.display = "block";//答えの表示を消す、二回目以降遊ぶときにnoneにしてるので再表示させる
        questioncounttextElement.style.display = 'none';
        answercountElement.style.display ='block';
        answercountElement.textContent = `質問回数は${questioncountElement.textContent}回でした！`
    }
    questioncountElement.textContent = parseInt(questioncountElement.textContent, 10) + 1;//10進数のint型にして+1する
}

yesBtn.addEventListener('click', () => {
    low = guess;
    updateGuess();
});

noBtn.addEventListener('click', () => {
    high = guess;
    updateGuess();
});

resetElement.addEventListener('click', () => {
    low = 0;
    high = 10001;
    questionElement.style.display = 'block';
    yesBtn.style.display = 'inline';
    noBtn.style.display = 'inline';
    resultElement.style.display = "none";//答えの表示を消す
    questioncounttextElement.style.display = 'block';
    questioncountElement.textContent = 0;
    answercountElement.style.display ='none';

    updateGuess();
})

// 初期表示
updateGuess();
