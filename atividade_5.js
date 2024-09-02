// Função para inverter os caracteres de uma string
function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// String pré-definida para teste
const stringParaInverter = 'Exemplo de string';

// Invertendo a string pré-definida e exibindo o resultado
const stringInvertida = inverterString(stringParaInverter);
console.log('String invertida (pré-definida):', stringInvertida);

// Para permitir que o usuário forneça uma string através de entrada (Node.js)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita uma string ao usuário e exibe a string invertida
rl.question('Digite uma string para inverter: ', (inputString) => {
    const resultadoInvertido = inverterString(inputString);
    console.log('String invertida (entrada do usuário):', resultadoInvertido);
    rl.close();
});
