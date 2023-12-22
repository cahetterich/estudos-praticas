// 3 - Avançando em JavaScript

// 3.1 Manipulação de arrays

const frutas = ["Maçã", "Banana"];
frutas.unshift("Laranja"); // unshift - Adiciona "Laranja" ao começo do array
console.log(frutas);

frutas.shift(); // Remove o primeiro elemento do array
console.log(frutas);

// map, filter, reduce -> arrow function (sintaxe)

//find = retorna o primeiro número ou item especificado - critério selecionado
const numeros = [1, 2, 3, 4, 5, 6];
const numeroPar = numeros.find((num) => num % 2 === 0); // Encontra o primeiro número par
console.log(numeroPar); // 2

//filter = retorna todos os item especificado - fazendo uma filtragem segundo o critério selecionado
const numerosPares = numeros.filter((num) => num % 2 === 0); // Filtra todos os números pares
console.log(numerosPares); // [2, 4, 6]

// 3.2 Manipulação de strings avançada

const frase = "  Olá, mundo!  ";
const palavras = frase.trim().split(" "); // split = Remove espaços extra e divide a string em palavras
console.log(palavras); // ["Olá,", "mundo!"]

const stringSemEspacos = frase.trim(); // trim = Remove espaços no início e no final da string
console.log(stringSemEspacos); // "Olá, mundo!"

//verificar se é um texto

const frase2 = "JavaScript é incrível!";

// startsWith = verfica se o começo da string é um texto - colocamos ("Java") exatamente a frase que desejamos buscar, se nesse exemplo fossemos colocar "java" daria false, pois o ínicio da frase é com J maiusculo
console.log(frase2.startsWith("Java")); // true

// endsWith = verfica se o no final da string é um texto, deve ser exatamente igual como no startsWith
console.log(frase2.endsWith("!")); // true

// 3.3 Exceções e tratamento de erros -  manipulação de erros 

/*

//ENCERRA A ATIVIDADE DO PROGRAMA
const idade = 15;
if (idade < 18) {
  throw new Error("Você deve ter pelo menos 18 anos."); // aqui criamos um novo erro, e executamos ele no console 
}

//USADO PARA MOSTRAR MENSAGEM NA TELA DO USUÁIO
try {  // try de tentar
  const idade = 15;
  if (idade < 18) {
    throw new Error("Você deve ter pelo menos 18 anos.");
  }
} catch (erro) {  // aqui pega o erro - caso não tenha erro passa em branco  
  console.log(erro.message); // "Você deve ter pelo menos 18 anos." - usando (erro messenge) sem o ponto manda apenas a mensagem/string, mas podemos usar só erro também. 
}
*/

// 3.4 Callbacks - função que é executada em outra função 
function cumprimentar(nome, callback) {
  console.log("Olá, " + nome);
  callback();
}

function mostrarSaudacao() {
  console.log("Como você está?");
}

// função anonima 
// função executada dentro apenas dentro de outra função
cumprimentar("Maria", mostrarSaudacao); // "Olá, Maria" "Como você está?"

cumprimentar("Maria", function () {
  console.log("Está tudo bem?");
}); // é disparada quando solicitamos a função pai 


//  settimeout - executa algo depois de um determinado tempo
function mostrarMensagem() {
  console.log("Esta é uma mensagem - após 3 segundos");
}
           //Callback, segundos 3 segundos = 3000  - 1000ms = 1s
setTimeout(mostrarMensagem, 3000); // Mostra a mensagem após 3 segundos

//outro exemplo utilizando setTimeout

setTimeout(function () {
  console.log("Oi - após 4 segundos");  
}, 4000);

// 3.5 Promises - 

// promete que o código vai executar após alguma coisa

 // no promises podemos "resolve" ou "reject" (resolver ou rejeitar) - é um padrão da função anonima ()
const promessa = new Promise((resolve, reject) => { 

  const condicao = true;
  if (condicao) {
    resolve("A condição é verdadeira!");
  } else {
    reject("A condição é falsa!");
  }
});   // é a função

promessa  // then executa a promessa - ou seja, é o resolve
  .then((mensagem) => console.log(mensagem)) // "A condição é verdadeira!"
         // catch executa o reject, ou neste caso o erro
  .catch((erro) => console.log(erro));

/*
utilizamos promise tem muitas bibliotecas feitas - Bibliotecas feitas que são "promise based"

eram usadas para requisição de servidores, mas hoje usamos Async e Await
*/

// utilizando all em promise
// faz com que seja executada várias promise de uma única vez

const promessa1 = Promise.resolve(3);
const promessa2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2500, "teste promise")
);
        //executada                 // then - recebe os valores   
Promise.all([promessa1, promessa2]).then((valores) => console.log(valores)); // [3, "foo"]


// 3.6 Async/Await
// assincrona - acontece com o andar do código, não trava o programa
async function obterValor() {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor obtido!"), 2000);
  });

  const valor = await promessa; // await - espera o valor chegar para executá-lo
  console.log(valor); // "Valor obtido!"
}

obterValor();

// Obter valor com erro - para todo o programa

/*
async function obterValorComErro() {  
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => reject("Valor com erro"), 2000);
    });

    const valor = await promessa;
    console.log(valor);
    }
obterValorComErro();
*/

// Obter valor com erro - segue o programa

async function obterValorComErro() {
  try {  // para que o código funcione mesmo com o erro, precisamos usar try e catch
    const promessa = new Promise((resolve, reject) => {
      setTimeout(() => reject("Erro ao obter valor!"), 2000);
    });

    const valor = await promessa;

    console.log(valor);
  } catch (erro) {
    console.error(erro); // "Erro ao obter valor!"
  }
}

obterValorComErro();


// 3.7 JSON

/*
é quase como um objeto, é puro texto

JSON = JavaScript Object Notation
{nome: 'teste'} => {"nome": "teste"} - padroniza a comunicação 
front-end e back-end em uma linguagem só 
*/

const objeto = { nome: "João", idade: 30 }; //array de objetos

const jsonString = JSON.stringify(objeto); // converte nosso objeto para JSON

console.log(jsonString); // "{"nome":"João","idade":30}"
console.log(typeof jsonString); // mostra o tipo - string

// forma correta de fazer a conversão 
const jsonString2 = '{"nome":"João","idade":30}';
const objeto2 = JSON.parse(jsonString);
console.log(objeto2); // { nome: "João", idade: 30 }
