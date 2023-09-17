let todoList = [
    
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
        todoList.unshift({
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
//getLocalStorage();
const gettodolist = () => {
    todoList = fetch("https://jsonplaceholder.typicode.com/todos?userId=1").then((response) => {
       return response.json();
    }).then((data)=>{
        console.log(data);
        todoList = data;
        rendertodolist();
    })
}
gettodolist();

const allbtn = document.getElementById('All')
const completedbtn = document.getElementById("Completed")
const undonebtn = document.getElementById("undone");

const completed = () => {
    const completed1 = gettodolist.foreach ((item) =>{
        
    })
}
allbtn.addEventListener(click)
completedbtn.addEventListener(click)
undonebtn.addEventListener(click)