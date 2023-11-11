// Seleção de elementos

const todoForm2 = document.querySelector("#todoForm");                 // 01
const todoInput2 = document.querySelector("#todoInput");              // 02
const todoList2 = document.querySelector("#todoList");               // 03
const editForm2 = document.querySelector("#editForm");              // 04
const editInput2 = document.querySelector("#editInput");           // 05
const cancelEditBtn2 = document.querySelector("#cancelEditBtn");  // 06

let oldInputValue;


// Funções

// 01   -   funções para adicionar uma tarefa --->

const saveTodo = (text) => {   // aqui estamos esperando o texto da nossa tarefa

    const todo = document.createElement("div")  // aqui chamamos a div class"todo done" que é a nossa lista
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text // que será o texto que recebemos da função, e recebemos no inputValue do todoForm2
    todo.appendChild(todoTitle); // aqui será enviado para a div o texto de nosso usuários

  // 02   -    funcionalidades dos botões --->

    const doneBtn = document.createElement("button")   // criação dos botões - fundamentos
    doneBtn.classList.add("finishTodo")  // adicionar função para finalizar tarefa  na nossa <class = finishTodo> no html
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>' // adicionar o icone do botão
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")   // criação dos botões - fundamentos
    editBtn.classList.add("editTodo")  // adicionar função para finalizar tarefa  na nossa <class = editTodo> no html
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>' // adicionar o icone do botão
    todo.appendChild(editBtn)
    
    const deleteBtn = document.createElement("button")   // criação dos botões - fundamentos
    deleteBtn.classList.add("removeTodo")  // adicionar função para finalizar tarefa  na nossa <class = removeTodo> no html
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>' // adicionar o icone do botão
    todo.appendChild(deleteBtn)

// 03

    todoList2.appendChild(todo);  // pegamos e colocamos o texto na lista geral, na <div id="todoList"> no html
   
// 02
    
    todoInput2.value = ""; // limpa o espaço para o usuário pode escrever outro texto
    todoInput2.focus(); // volta o foco na caixa de adição de tarefas

};    // 01-02 fim da função de funcionalidades dos botões e tarefa <----

// 04  -  EDIT  FORM       *****
const toggleForms = () => { // O que estiver sendo exibido vai ficar escondido e aparecerá apenas a opção para editar sua tarefa
// 04  
  editForm2.classList.toggle("hide");  
  todoForm2.classList.toggle("hide");

// 03

  todoList2.classList.toggle("hide");
};

const updateTodo = (text) => {

  const todos = document.querySelectorAll(".todo")  // selecionamos todos os .TODO - class - e fazemos isso diversas vezes em nosso código para que o programa sempre puxe a alteração mais recente

  todos.forEach((todo) => {

    let todoTitle2 = todo.querySelector("h3") //aqui pegamos todos os TITULOS DO TODO ATUAL e mapeamos com forEach

    if(todoTitle2.innerText === oldInputValue) {  // aqui verificamos se o TITULO É IGUAL AO ANTERIOR JÁ SALVO
      todoTitle2.innerText = text; // se for diferente, alteramos e já salvamos
    }
  });  
};


// Eventos 


// 01   -  eventos para adicionar uma tarefa --->
todoForm2.addEventListener("submit", (e) => {
    e.preventDefault()  // aqui cria uma função para que não seja enviado para o banco de dados, só para teste

// 02

    const inputValue = todoInput2.value // acessamos o input e puxamos o valor ".value" e armazenamos na variável "inputValue"

    if(inputValue) {   // salvou a nossa tarefa no "inputValue" 
        saveTodo(inputValue)
        
}}); // 01 fim dod eventos para adicionar uma tarefa <----


// 02  -   identificação dos botões =  "FEITO", "EDITAR", "REMOVER"
document.addEventListener("click", (e) => {   // adicionar o evento de click para que possamos identificar o elemento que foi clicado

    const targetEl = e.target; // pegamos o elemento que foi clicado, pois com essa função conseguimos identificar o elemento
    const parentEl = targetEl.closest("div");  //elemento "pai" - selecionamos a div mais próxima/pai que no caso é a <div class="todoDone"> pois é a mais próxima do <button class="finishTodo">
    let todoTitle2; // como não temos div, criamos um let para poder puxar essa ação em outra parte do nosso código

    if(parentEl && parentEl.querySelector("h3")) { // perguntar se o elemento pai existe, e se tiver, se tem o H3
    todoTitle2 = parentEl.querySelector("h3").innerText; // criamos esse let global "todoTitle2" aqui para que possamos alterar se necessário e chamar em outras funções do código
    }                                                        

    if(targetEl.classList.contains("finishTodo")) {  // então criamos um if para poder identificar se o 'targetEl' possui uma <class= finishTodo>
    parentEl.classList.toggle("done")  // por isso é importante chamar o elemento "pai", para que todos recebam o elemento "done"
    // parentEl.classList.class("done") - IMPORTANTE! colocamos toggle no final, para que só seja recebido o click uma nunca vez, se deixarmos add ele adiciona vários em nossa div, e não queremos isso
   } 

    if(targetEl.classList.contains("removeTodo")){  // aqui estamos identificando o botão de remoção do elemento "pai"
        parentEl.remove();  //dessa forma temos a posibilidade de excluir tarefas também 
    }

    if (targetEl.classList.contains("editTodo")) { // mapeando o click para editar nossa lista - lembrando de puxar toggleForms para que só apareça o campo de edição
       toggleForms();

// 05
       editInput2.value = todoTitle2  // aqui mudamos o titulo da tarefa do usuário, e mudando o valor do INPUT da EDIÇÂO
       oldInputValue = todoTitle2 //mapeamos e salvamos na "memória".
    }
});

// 06
cancelEditBtn2.addEventListener("click", (e) => {
  e.preventDefault()  // para que não envie o formulário - Clicar em "CANCELAR" EDIÇÂO DA LISTA

  toggleForms();
});

//  04    -    EDIT FORM     *****
editForm2.addEventListener("submit", (e) => {
   
  e.preventDefault()

// 05
  const editInput2Value = editInput2.value  // pegamos o valor do input ANTERIOR e a ALTERAÇÃO que o usuário fez e fizemos a "troca"

  if(editInput2Value) {  // aqui fazemos mais uma checagem, e se estiver vario não alterará nada 
     updateTodo(editInput2Value) // atualizar para o novo valor alterado pelo usuário
  }

  toggleForms();

})