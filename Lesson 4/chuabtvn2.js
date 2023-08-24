let todoList = [
    {
        id: 1,
        title: "Lam BTVN JSI03",
        completed: false
    },
    {
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        id: 3,
        title: "quet nha",
        completed: false
    },
    {
        id: 4,
        title: "rua bat",
        completed: true
    },
    {
        id: 5,
        title: "lau nha",
        completed: false
    },
]

const todolistelm = document.getElementById('Todolist')
const inputTodoelm = document.getElementById('inputTodo')
const addBtn = document.getElementById('add-btn')
const handleDeleteTodo = (deleteId) => {
    const deleteIndex = todoList.findIndex((todo) => todo.id === deleteId);
    todoList.splice(deleteIndex, 1);
    rendertodolist();
    saveLocalStorage();
}
const handleChangeStatus = (id) => {
    const index = todoList.findIndex((todo) => todo.id === id)
    todoList[index].completed = !todoList[index].completed;
    saveLocalStorage();
}

const rendertodolist = () => {
    todolistelm.innerHTML = ""
    todoList.forEach((todo) => {
        const todoElm = document.createElement('div');
        todoElm.classList.add('todo');
        const inputElm = document.createElement('input');
        inputElm.setAttribute('type', 'checkbox');
        inputElm.checked = todo.completed;
        inputElm.addEventListener('change', () => handleChangeStatus(todo.id))
        const spanElm = document.createElement('span');
        spanElm.textContent = todo.title;
        const iconElm = document.createElement('i');
        iconElm.classList.add("bi", "bi-trash3-fill");
        iconElm.addEventListener('click', () => handleDeleteTodo(todo.id))
        todoElm.appendChild(inputElm);
        todoElm.appendChild(spanElm);
        todoElm.appendChild(iconElm);
        todolistelm.appendChild(todoElm);
    })
} 
const handleAddTodo = () =>{
    if(inputTodoelm.value === ''){
        alert('ban can phai nhap gi do');
    }
    else{
        todoList.push({
            id: Math.floor(Math.random() * 1000),
            title: inputTodoelm.value,
            completed: false,
        })
        rendertodolist();
        inputTodoelm.value = "";
        saveLocalStorage();
    }
}
 const saveLocalStorage = () =>{
    localStorage.setItem('todos', JSON.stringify(todoList));
 } 
 const getLocalStorage = () => {
    const todoListlocal = JSON.parse(localStorage.getItem('todos'));
    if(todoListlocal){
        todoList = todoListlocal;
    }
    rendertodolist();
 }
addBtn.addEventListener('click', handleAddTodo)
getLocalStorage();

