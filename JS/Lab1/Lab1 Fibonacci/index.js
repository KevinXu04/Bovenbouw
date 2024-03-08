let container = document.getElementById("fibonacci");
let fibonacciSequence = fibonacciBerekenen(20);

function fibonacciBerekenen(n, fibonacci = [0, 1]) {
    if (n <= 2) {
        return fibonacci;
    }

    return fibonacciBerekenen(n - 1, fibonacci.concat(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]));
}

for (let i = 0; i < fibonacciSequence.length; i++) {
    let span = document.createElement("span");
    span.textContent = fibonacciSequence[i] + (i !== fibonacciSequence.length - 1 ? ", " : "");
    container.appendChild(span);
}