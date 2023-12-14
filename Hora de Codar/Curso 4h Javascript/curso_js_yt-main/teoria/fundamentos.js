// 1 - Configuração do ambiente de desenvolvimento
// VS Code e teste de JS no console

// 2 - Fundamentos de JavaScript

// 2.1 Sintaxe básica
var minhaVariavel = "Olá, mundo!";

console.log(minhaVariavel);

// 2.2 Comentários

// Isto é um comentário de uma linha
/* Isto é um
   comentário de várias linhas */

// 2.3 Variáveis e tipos de dados
var meuNumero = 10; // Number

console.log(meuNumero); // mostra meuNumero no console

console.log(meuNumero + 5); // soma os números, mostrando 15 no console

console.log("10" + 5); // aqui vai contatenar os números, pois 10 é uma string, logo no console aparecerá 105

console.log(typeof meuNumero); //typeof mostra qual tipo de variavel é 

var minhaString = "Texto"; // String - texto

console.log(typeof minhaString);  // mostra qual tipo de dado é

var meuBooleano = true; // Boolean - verdadeiro ou falso (variações)

console.log(typeof meuBooleano);

var meuObjeto = {}; // Object 
var meuArray = []; // Array
var minhaNull = null; // Null - sem valor, usado para iniciar algumas variaveis
var meuUndefined = undefined; // Undefined

// 2.4 let e const   - formas de declarar variveis 
let teste = 1;
const PI = 3.14; // const não altera, é constante - MAIS USADO profissionamente

console.log(teste, PI);

// 2.5 Operadores
const x = 10;
const y = 5;

// Operadores aritméticos
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2

// Operadores de comparação = false / true
console.log(x == y); // false   "são igual?"
console.log(x != y); // true    "são diferentes?"

console.log("5" == 5); // verdadeiro / true (compara semelhança - valor)
console.log("5" === 5); // falso / false    (compara igualdade - tipo)
console.log("5" !== 5); // verdadeiro / true (compara diferença - tipo e valor)

// Operadores lógicos  - tabela verdade (  AND &&   ou  OR || )
console.log(x > y && y > 10); // true - AND / E
console.log(x > y && y < 10);  // false - AND / E
console.log(x < y && y < 10);  // false - AND / E

console.log(x > y || y > 10); // true - OR / OU
console.log(x > y || y < 10); // true - OR / OU
console.log(x < y || y < 10); // false - OR / OU

// 2.6 Conversão de tipos
const meuNumero2 = "123"; // String
const meuNumeroConvertido = Number(meuNumero2); // Number
console.log(typeof meuNumeroConvertido); // "number"

//
// D: Curso Formação Front-end
//

// 2.7 Estruturas de controle de fluxo

// Condição de condição - if, else if, else
const idade = 20;

if (idade < 13) {
  console.log("Criança");
} else if (idade < 20) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

// Condição switch
const fruta = "Maçã";

switch (fruta) {  // colocamos no switch aquilo que estamos avaliando 
  case "Banana":
    console.log("A const fruta é Banana!");
    break; // devemos colocar o break em cada case, pois assim quando o elemento é encontrado a função retorna o valor correto
  case "Maçã":
    console.log("A const fruta é Maçã!");
    break;
  default: // é com um else, caso nenhum dos case seja verdadeiro/seja executado
    console.log("Nenhuma fruta selecionada");
}

// 2.7 Estruturas de loop - repetição 

// Loop for

//contador + condição de limite + incremento ("i = i + 1" que é = a "i++"")
for (let i = 0; i < 5; i++) {
  console.log(i);    // 0, 1, 2, 3, 4
}

for (let i = 0; i < 5; i++) {
  // sinal de concatenação +
  console.log("O valor de i é: " + i);    // 0, 1, 2, 3, 4
}

// Loop while

let k = 0;  // devemos criar a variavel de incremento "i" fora de While
while (k < 5) {
  console.log("O valor de k: " + k); // 0, 1, 2, 3, 4
  k++;  // já o incremento fica no final do loop
}

// Loop Do while

let j = 0;   // também devemos criar a variavel de incremento "i" fora de While
do {   // faça 
  console.log("O valor de j: " + j); // 0, 1, 2, 3, 4
  j++;  // incremento 
} while (j < 5); // while com () que dentro tem a condição de fim  

// 2.8 Funções *************************************

// function nome(arg1, arg2 ) { corpo }

function cumprimentar(nome) {
  console.log(`Olá, ${nome}!`); // ou ("Olá," + nome);  - o ${nome} é utilizado para chamar o argumento dentro da frase/string
}

//invocação = nome()
cumprimentar("Maria"); // Olá, Maria!

// 2.9 Escopo de Variáveis

// Escopo global
let cor = "azul";

function mostrarCor() {
  // Escopo local
  let cor = "verde";
  console.log(cor); // verde
}

mostrarCor();
console.log(cor); // azul

// 2.10 Hoisting   = içamento, puxa para "cima do código" a função e não abaixo como geralmente fazemos
testeHoisting();

function testeHoisting() {
  console.log("Deu certo!");
}

// 2.11 Arrow function = função de sintaxe resumida
const testeArrow = () => console.log("Isso também é uma função");  // função de uma linha só 

testeArrow(); // precisamos chamar para que apareça no console

// 2.12 Truthy e Falsy
const minhaVariavel1 = ""; // Falsy
const minhaVariavel2 = "Algum texto"; // Truthy

if (minhaVariavel1) {
  console.log("Variável1 é truthy");
} else {
  console.log("Variável1 é falsy"); // Isso será exibido
}

if (minhaVariavel2) {
  console.log("Variável2 é truthy"); // Isso será exibido
} else {
  console.log("Variável2 é falsy");
}

// 2.13 Arrays

// Array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1

// Adição de elementos
numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// Remoção de elementos
numeros.pop();
console.log(numeros); // [1, 2, 3, 4, 5]

// 2.14 Manipulação de Strings

// String
const minhaStringNova = "Olá, Mundo!";

// Concatenação
const minhaString2 = minhaStringNova + " Como você está?";
console.log(minhaString2); // Olá, Mundo! Como você está?

// Interpolação
const minhaString3 = `${minhaStringNova} Como você está?`;
console.log(minhaString3); // Olá, Mundo! Como você está?

// Métodos comuns
console.log(minhaString3.length); // 31
console.log(minhaString3.toUpperCase()); // OLÁ, MUNDO! COMO VOCÊ ESTÁ?

// 2.15 Data e Hora

// Data atual
const agora = new Date();
console.log(agora);

// Data específica
const natal = new Date(2023, 11, 25);
console.log(natal);

// 2.16 Objeto Math

// Número PI
console.log(Math.PI); // 3.141592653589793

// Arredondamento
console.log(Math.round(3.6)); // 4

// Raiz quadrada
console.log(Math.sqrt(16)); // 4

// Potência
console.log(Math.pow(2, 3)); // 8
