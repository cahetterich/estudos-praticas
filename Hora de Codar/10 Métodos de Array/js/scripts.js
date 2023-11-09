const data = [
  { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
  { name: "João", age: 18, sallary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
  { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];

/* 1 - Reverse
array em ordem inversa da original {Erica, Pedro, Mariana, João, Matheus} 
- Utilidade = filtros, catalogo de produtos (maior para menor / mais novo para mais antigos)*/

const reverseData = data.reverse(); 

console.log(reverseData);

/* 2 - find 
serve para encontrarmos algo dentro do array, porém só traz um único resultado - cuidado com isso
- Utilidade = encontrar um usuário com o maior saário 
*/

// find faz um looping em cada item do array, e podemos chamar a intidade de qualquer forma, neste caso chamamos de user
const highestSallary = data.find((user) => user.sallary > 5000); 

console.log(highestSallary);

/*3 - findIndex
serve para encontrarmos um indice de um item que corresponde a nossa função/lógica
- utilidade = encontrar o indice de array com menor salário
*/

const lowestSallary = data.findIndex(
  (user) => user.sallary > 0 && user.sallary < 2000
);

console.log(lowestSallary);

//após encontrarmos o usuário com menor salário, podemos criar uma função que dará um aumento para ele 

data[lowestSallary].sallary += 200;

console.log(data);

/* 4 - includes
serve para procurarmos se dentro do array existe algum item/número específico
identificar se a lista possui um determinado número (true e false) 
- utilidade = identificar se a lista o número 4 e após o 100.
*/
const numbers = [1, 2, 3, 4, 5];

const hasFour = numbers.includes(4);

console.log(hasFour);
console.log(number.includes(100));

/* 5 - map
serve para dar looping em arrays / quando queremos modificar algo em nosso array original
-utilidade = queremos ablicar uma identificação de "newsletter" em todos os usuários do nosso banco de dados
*/

data.map((user) => (user.newsletter = false));

console.log(data);

/* 6 - filter
serve para fazermos um filtro em uma condição 
- utilidade = filtrar/extrair uma faixa de usuários que possuem licença para dirigir
*/
const drivers = data.filter((user) => user.driverLicense);

console.log(drivers);

/* 7 - reduce
serve para reduzir vários dados em um só
- utilidade = saber a soma de salário de todos os usuários do banco de dados
*/

const sallariesSum = data.reduce(
  (totalSallary, user) => (totalSallary += user.sallary), //totalSallary é uma variavel exclussiva dessa função criada, podendo ser modificada por qualquer nome
  0 // o zero define o ponto inicial, somando += (atribuição com soma 0 + 1 salário, 1 salário + 2 salário, 2 salário + 3 salário... até terminar a soma de todos os salários no bando de dados)
);

console.log(sallariesSum);

/* 8 - forEach 
semelhante a um for / while - nós que definimos o que ele faz
- utilidade = para exibir algo na tela (ex:nome dos usuários)
*/
const showUserNames = (users) => {
  users.forEach((user) => {
    console.log(`Olá ${user.name}!`);
  });
};

showUserNames(data);

/* 9 - some
verifica se alguma coisa dentro do nosso array corresponde ao que estamos buscando com = True False
-utilidade = queremos ver se alguém assinou a "newsletter"
*/

let someoneWithNesletter = data.some((user) => user.newsletter);

console.log(someoneWithNesletter);

// como todos os usuários possuem a newsletter False, podemos incluir o indice 0 como True = 
data[0].newsletter = true;

someoneWithNesletter = data.some((user) => user.newsletter);

console.log(someoneWithNesletter);

/* 10 - every
consigo analisar se todos os dados possuem a condição que estou procurando (True / False)
- utilidade = se todos preencheram o nome no cadastro de usuário
*/
const everyUserHasName = data.every((user) => user.name);

console.log(everyUserHasName);


// aqui já pesquisamos se todos os usuários possuem um salário maior que 2mil
const everyUserHasGoodSallary = data.every((user) => user.sallary > 2000);

console.log(everyUserHasGoodSallary);

/* outra forma de escrever uma função que precise de mais lógicas é essa= 

const everyUserHasGoodSallary = data.every((user) => {
  return user.sallary > 2000;
})

console.log(everyUserHasGoodSallary);*/