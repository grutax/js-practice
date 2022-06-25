const input = document.querySelector('.inputToDo');
const addItemButton = document.querySelector('.add-item-button');
const clearAllButton = document.querySelector('.clear-all-button');
const items = document.querySelector('.item-list');

const todoList = localStorage.getItem('To Do') ? JSON.parse(localStorage.getItem('To Do')) : [];


// ------------------------------------------------------- //

const writeChanges = () => {
    localStorage.setItem('To Do', JSON.stringify(todoList));
}

// ------------------------------------------------------- //

const displayToDos = () => {
    let displayToDo = "";
    todoList.forEach((item, index) => {
        displayToDo += `
        <div class="item">
            <p id="item_${index}_p" class="${item.isDone ? 'done' : ''}">${item.todo}</p>
            <div class="icons">
                <img src="./img/done.png" alt="done icon" id="item_${index}_done">
                <img src="./img/edit.png" alt="edit icon" id="item_${index}_edit">
                <img src="./img/delete.png" alt="delete icon" id="item_${index}_delete">
            </div>
        </div>
        `;
    });
    items.innerHTML = displayToDo;
}

// ------------------------------------------------------- //

const addItemToList = () => {
    if(!input.value) return;

    const newToDo = {
        todo: input.value,
        isDone: false,
        id: `todo_${todoList.length}`
    };

    todoList.push(newToDo);
    input.value = "";

    displayToDos();
    writeChanges();
}

// ------------------------------------------------------- //

const clearAllItems = () => {
    items.innerHTML = "";
    todoList.splice(0, todoList.length);
    writeChanges();
}

// ------------------------------------------------------- //

const removeItem = (index) => {
    todoList.splice(index, 1);
    todoList.forEach((item, index) => {
        item.id = `todo_${index}`;
        console.log('hello');
    });
}

const changeToDo = (index, action) => {
    switch (action) {
        case "done":
            todoList[index].isDone = !todoList[index].isDone;
            document.getElementById(`item_${index}_p`).classList.toggle('done');
            break;
        case "edit":
            input.value = todoList[index].todo;
            removeItem(index);
            break;
        case "delete":
            removeItem(index);
            break;
    }
    writeChanges();
}

const changeList = (event) => {
    const id = event.target.id;
    if(!id) return;

    const index = id.split('_')[1];
    const action = id.split('_')[2];

    changeToDo(index, action);
    displayToDos();
}

// ------------------------------------------------------- //

const pressEnter = (event) => {
    if (event.keyCode === 13) addItemToList();
}

// ------------------------------------------------------- //

addItemButton.addEventListener('click', addItemToList);
clearAllButton.addEventListener('click', clearAllItems);
items.addEventListener('click', (event) => changeList(event));
input.addEventListener('keydown', (event) => pressEnter(event));

displayToDos();