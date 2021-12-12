
//Importações do projeto
var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split('\n');

//Entrada de dados
let valor1 = lines.shift();
let valor2 = lines.shift();

//Processamento de dados
let soma = parseInt(valor1) + parseInt(valor2);

//Saída de dados
console.log(`X = ${soma}`);