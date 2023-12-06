const objs = [
  {
    nome: "Matheus",
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "Empresa X",
    },
    hobbies: ["Programar", "Correr", "Ler"],
  },
  {
    nome: "João",
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["Jogar", "Academia"],
  },
];

// console.log(objs)
// JSON

//converter objeto para json - 
const jsonData = JSON.stringify(objs)  // stringify = transfere o JSON para a API como texto / garante que seja um texto com JSON válido

console.log(jsonData) // nada mais é que um texto, mas já é um JSON

console.log(typeof jsonData) // aqui aparece que é texto(string) mas é um JSON

// converter JSON para objetos
const objData = JSON.parse(jsonData);

console.log(objData) // mostra em objeto após convertido
console.log(typeof objData)


//MAP, mapeia o array seguindo a conversão feita de JSON para Objeto - mostrando que funciona
objData.map((pessoa) => {
    console.log(pessoa.nome)
})