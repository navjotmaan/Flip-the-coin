const coin = document.getElementById("coin");
const button = document.getElementById("btn");
const result = document.getElementById("result");

function flipCoin() {
    const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
    result.textContent = outcome;
}

coin.addEventListener("click", flipCoin);
button.addEventListener("click", flipCoin);
