function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) {
            return JSON.parse(decodeURIComponent(c.substring(nameEQ.length, c.length)));
        }
    }
    return null;
}

function loadTodos() {
    let todos = getCookie("todos");
    if (todos) {
        todos.forEach(todo => {
            addTodoToDOM(todo);
        });
    }
}

function saveTodos() {
    let todos = [];
    let todoElements = document.querySelectorAll('#ft_list .todo-item');
    todoElements.forEach(element => {
        todos.push(element.textContent);
    });
    setCookie("todos", todos, 7);
}

function addTodoToDOM(todoText) {
    let todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';
    todoDiv.textContent = todoText;
    todoDiv.onclick = function() {
        if (confirm("Do you want to remove this TO DO?")) {
            todoDiv.remove();
            saveTodos();
        }
    };
    let ftList = document.getElementById('ft_list');
    if (ftList.firstChild) {
        ftList.insertBefore(todoDiv, ftList.firstChild);
    } else {
        ftList.appendChild(todoDiv);
    }
}

function addNewTodo() {
    let todoText = prompt("Enter a new TO DO:");
    if (todoText && todoText.trim() !== "") {
        addTodoToDOM(todoText.trim());
        saveTodos();
    }
}

window.onload = loadTodos;