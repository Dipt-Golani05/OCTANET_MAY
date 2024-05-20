document.getElementById('add-button').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        const listItem = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(span);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        todoInput.value = '';
        todoInput.focus();
    }
}
