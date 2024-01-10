let myTasks = []


function createTaskItem(title){
    const section = document.getElementsByClassName("container-Tasks")[0];
    const ul = document.getElementsByClassName("ul-list")[0]

    const createli = document.createElement("li");
    const createDiv = document.createElement("div");
    const createP = document.createElement("p");
    const createButton = document.createElement("button");

    createli.classList.add("lista-tasks");
    createDiv.classList.add("task-info");
    createButton.classList.add("button-excluir");

    ul.append(createli)
    createli.append(createDiv)
    createDiv.append(createP, createButton)


    createButton.innerText = "Excluir"
    createP.innerText = (title)


    createButton.addEventListener("click", function(event) {
        event.preventDefault()
      
       ul.removeChild(createli)

       
    
    })


 
};



const buttonAdd = document.getElementsByTagName("button")[0];

buttonAdd.addEventListener("click", function(event){
  event.preventDefault()

  let input = document.getElementsByTagName("input")[0];

  let valorInput = input.value

  const createDiv = document.createElement("div")

  let newTask = {
    title: valorInput
  }

  createTaskItem(newTask.title)

  myTasks.push(newTask)

  adicionaNovoAFazer()
})


//   const buttonExc = document.getElementsByTagName("button")[1];

function adicionaNovoAFazer() {

    // Convertendo o array com o novo item para JSON
    const arrayComNovoItemJSON = JSON.stringify(myTasks)
     
    // Atualizando o valor do array no localStorage
    localStorage.setItem('listaDeAfazeres', arrayComNovoItemJSON)
 }

  
 function removerAFazer() {

  // Convertendo o array com o item removido para JSON
  const arrayComItemRemovidoJSON = JSON.stringify(myTasks)

  // Atualizando o valor do array no localStorage
  localStorage.setItem('listaDeAfazeres', arrayComItemRemovidoJSON)
}


function renderizaAFazeres(){
  const dadosNoLocalStorageJSON = localStorage.getItem('listaDeAfazeres')

  // Verifica se os dados existem no localStorage
  if(dadosNoLocalStorageJSON) {
    // Transforma os dados de JSON para Javascript válido
    const dadosNoLocalStorage = JSON.parse(dadosNoLocalStorageJSON)
    
    for(let i = 0; i < dadosNoLocalStorage.length; i++){
      createTaskItem(dadosNoLocalStorage[i].title)
    }
 } else {
  console.log('Nenhum dado encontrado no Local Storage')
 }

}

renderizaAFazeres()

// function pegaDadosNoLocalStorage() {
//   // Pega os dados no localStorage
//   const dadosNoLocalStorageJSON = localStorage.getItem('listaDeAfazeres')
 
//   // Verifica se os dados existem no localStorage
//   if(dadosNoLocalStorageJSON) {
//   // Transforma os dados de JSON para Javascript válido
//   const dadosNoLocalStorage = JSON.parse(dadosNoLocalStorageJSON) 

//   // Chama a função que renderiza os dados
//   renderizaAFazeres(dadosNoLocalStorage)
//   }
// }

// // Chama a função, para que rode quando a página iniciar
// pegaDadosNoLocalStorage()