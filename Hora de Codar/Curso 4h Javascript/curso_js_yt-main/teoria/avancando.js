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
cumprimentar("Maria", mostrarSaudacao); // "Olá, Maria" "Como você está?"

cumprimentar("Maria", function () {
  console.log("Está tudo bem?");
}); // é disparada quando solicitamos a função pai 


//  settimeout - executa algo depois de um determinado tempo
function mostrarMensagem() {
  console.log("Esta é uma mensagem após 3 segundos");
}

setTimeout(mostrarMensagem, 3000); // Mostra a mensagem após 3 segundos

// 3.5 Promises
const promessa = new Promise((resolve, reject) => {
  const condicao = true;
  if (condicao) {
    resolve("A condição é verdadeira!");
  } else {
    reject("A condição é falsa!");
  }
});

promessa
  .then((mensagem) => console.log(mensagem)) // "A condição é verdadeira!"
  .catch((erro) => console.log(erro));

const promessa1 = Promise.resolve(3);
const promessa2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "foo")
);

Promise.all([promessa1, promessa2]).then((valores) => console.log(valores)); // [3, "foo"]

// 3.6 Async/Await
async function obterValor() {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor obtido!"), 2000);
  });

  const valor = await promessa;
  console.log(valor); // "Valor obtido!"
}

obterValor();

/*

async function obterValorComErro() {
  try {
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

*/

// 3.7 JSON
const objeto = { nome: "João", idade: 30 };
const jsonString = JSON.stringify(objeto);
console.log(jsonString); // "{"nome":"João","idade":30}"

const jsonString2 = '{"nome":"João","idade":30}';
const objeto2 = JSON.parse(jsonString);
console.log(objeto); // { nome: "João", idade: 30 }
