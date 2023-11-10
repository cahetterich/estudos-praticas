// Seleção de elementos

const todoForm2 = document.querySelector("#todoForm");                 // 01
const todoInput2 = document.querySelector("#todoInput");              // 02
const todoList2 = document.querySelector("#todoList");               // 03
const editForm2 = document.querySelector("#editForm");              // 04
const editInput2 = document.querySelector("#editInput");           // 05
const cancelEditBtn2 = document.querySelector("#cancelEditBtn");  // 06


// Funções

// 01 funções para adicionar uma tarefa --->

const saveTodo = (text) => {   // aqui estamos esperando o texto da nossa tarefa

    const todo = document.createElement("div")  // aqui chamamos a div class"todo done" que é a nossa lista
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text // que será o texto que recebemos da função, e recebemos no inputValue do todoForm2
    todo.appendChild(todoTitle); // aqui será enviado para a div o texto de nosso usuários

  // 02 funcionalidades dos botões --->

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


    todoList2.appendChild(todo);  // pegamos e colocamos o texto na lista geral, na <div id="todoList"> no html

    todoInput2.value = ""; // limpa o espaço para o usuário pode escrever outro texto
    todoInput2.focus(); // volta o foco na caixa de adição de tarefas

};    // 01-02 fim da função de funcionalidades dos botões e tarefa <----


// Eventos 


// 01 eventos para adicionar uma tarefa --->
todoForm2.addEventListener("submit", (e) => {
    e.preventDefault()  // aqui cria uma função para que não seja enviado para o banco de dados, só para teste

    const inputValue = todoInput2.value // acessamos o input e puxamos o valor ".value" e armazenamos na variável "inputValue"

    if(inputValue) {   // salvou a nossa tarefa no "inputValue" 
        saveTodo(inputValue)
        
}}); // 01 fim dod eventos para adicionar uma tarefa <----


// identificação dos botões
document.addEventListener("click", (e) => {   // adicionar o evento de click para que possamos identificar o elemento que foi clicado

    const targetEl = e.target; // pegamos o elemento que foi clicado, pois com essa função conseguimos identificar o elemento
    const parentEl = targetEl.closest("div");  //elemento "pai" - selecionamos a div mais próxima/pai que no caso é a <div class="todoDone"> pois é a mais próxima do <button class="finishTodo">

    if(targetEl.classList.contains("finishTodo")) {  // então criamos um if para poder identificar se o 'targetEl' possui uma <class= finishTodo>
    parentEl.classList.toggle("done")  // por isso é importante chamar o elemento "pai", para que todos recebam o elemento "done"
    // parentEl.classList.class("done") - IMPORTANTE! colocamos toggle no final, para que só seja recebido o click uma nunca vez, se deixarmos add ele adiciona vários em nossa div, e não queremos isso
  } 

    if(targetEl.classList.contains("removeTodo")){  // aqui estamos identificando o botão de remoção do elemento "pai"
        parentEl.remove();  //dessa forma temos a posibilidade de excluir tarefas também 
    }
})
