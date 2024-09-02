// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacciNumber(num) {
    // Função para calcular números de Fibonacci até o número fornecido
    let a = 0, b = 1, fib = 0;
    
    if (num === 0) return true; // O número 0 pertence à sequência de Fibonacci

    while (fib < num) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib === num;
}

// Número a ser verificado
const numberToCheck = 21; // Substitua pelo número que deseja verificar

// Verificação e mensagem
if (isFibonacciNumber(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
