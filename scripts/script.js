let $list;
let $addButton;
let $modal;
let $newInput;
let $closePopup;
let $acceptTodo;
let $cancelTodo;
let $inputPopup;
let id;
let title;
let newElement;
let newId;
let newTitle;

function main() {
  prepareDOMElements();
  prepareDOMEvents();
  prepareInitialList();
}

function prepareDOMElements() {
  $list = document.getElementById('list');
  $addButton = document.getElementById('addTodo');
  $modal = document.getElementById('myModal');
  $newInput = document.getElementById('myInput');
  $closePopup = document.getElementById('closePopup');
  $cancelTodo = document.getElementById('cancelTodo');
  $acceptTodo = document.getElementById('acceptTodo');
  $inputPopup = document.getElementById('popupInput');
}

function prepareDOMEvents() {
  $newInput.addEventListener('keydown', enterPopup);
  $addButton.addEventListener('click', addElement);
  $closePopup.addEventListener('click', closePopup);
  $cancelTodo.addEventListener('click', closePopup);
  $acceptTodo.addEventListener('click', editElement);
  $acceptTodo.addEventListener('click', closePopup);
}

function prepareInitialList() {
  $list.innerHTML = "";
  $newInput.value = "";
  $inputPopup.value = "";
  getTodo((list) => {
    list.forEach(todo => {
      addNewElementToList(todo.title, todo.id);
  });
  })
}

function enterPopup() {
  if (event.keyCode === 13) {
    addElement();
  };
};

function addNewElementToList(title, id) {
  $list.appendChild(createElement(title, id));
  
}

function createElement(title, id) {
    newElement = document.createElement('li');
 
    newElement.innerText = $newInput.value
    newElement.innerText = title
    newElement.title = title
  
    
    newElement.id = id;
    newElement.className = "nextElement"
  

      var toEdit = document.createElement("SPAN");
      toEdit.className = "edit";
      toEdit.innerText = "EDIT"
      toEdit.style.margin = "0px 30px"
      newElement.appendChild(toEdit);
      
     toEdit.addEventListener('click', openPopup);

     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     newElement.appendChild(span);

     span.addEventListener('click', deleteElement);

      var isDone = document.createElement("SPAN");
      isDone.className = "done";
      isDone.innerText = "DONE"
      isDone.style.margin = "0px 30px"
      newElement.appendChild(isDone);

      isDone.addEventListener('click', function() {
        isDone.classList.add("is-done");
      });


  return newElement;
}

function addElement() {
  const title = $newInput.value
  postTodo(title, prepareInitialList)
}

function deleteElement() {
    const id = this.parentElement.id;
    deleteTodo(id, prepareInitialList)
}

function openPopup() {
  newId = this.parentElement.id;
  newTitle = this.parentElement.title;
  $inputPopup.value = newTitle;
  $modal.classList.add("modal-on");
}

function editElement() {
  const id = newId;
  const title = $inputPopup.value;
    putTodo(id, title, prepareInitialList)
}

function closePopup() {
  $modal.classList.remove("modal-on");
}

document.addEventListener('DOMContentLoaded', main);